import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { marked } from 'marked';

const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

const DB_ID = import.meta.env.NOTION_DATABASE_ID;
const GALLERY_DB_ID = import.meta.env.NOTION_GALLERY_DATABASE_ID;

export interface GalleryPhoto {
  id: string;
  label: string;
  aspect: 'tall' | 'wide' | 'square' | 'portrait' | 'landscape';
  imageUrl: string;
  order: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  year: string;
  readTime: string;
}

export interface BlogPostWithContent extends BlogPost {
  contentHtml: string;
}

function getText(prop: any): string {
  if (!prop) return '';
  if (prop.type === 'title') return prop.title.map((t: any) => t.plain_text).join('');
  if (prop.type === 'rich_text') return prop.rich_text.map((t: any) => t.plain_text).join('');
  if (prop.type === 'select') return prop.select?.name ?? '';
  if (prop.type === 'date') return prop.date?.start ?? '';
  return '';
}

function getTitleProp(props: any): string {
  const titleProp = Object.values(props).find((p: any) => p.type === 'title') as any;
  return titleProp ? getText(titleProp) : '';
}

function estimateReadTime(wordCount: number): string {
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return `${minutes} min read`;
}

export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  const response = await notion.databases.query({
    database_id: GALLERY_DB_ID,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    const urlProp = props.ImageUrl;
    const imageUrl = urlProp?.type === 'url' ? (urlProp.url ?? '') : '';
    const rawAspect = getText(props.Aspect);
    const aspect = (['tall', 'wide', 'square', 'portrait', 'landscape'].includes(rawAspect) ? rawAspect : 'square') as GalleryPhoto['aspect'];
    return {
      id: page.id,
      label: getTitleProp(props),
      aspect,
      imageUrl,
      order: props.Order?.number ?? 0,
    };
  });
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const response = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      property: 'Status',
      select: { equals: 'Published' },
    },
    sorts: [{ property: 'Date', direction: 'descending' }],
  });

  return response.results.map((page: any) => {
    const props = page.properties;
    const dateStr = getText(props.Date);
    const year = dateStr ? new Date(dateStr).getFullYear().toString() : '';
    return {
      id: page.id,
      slug: getText(props.Slug) || page.id,
      title: getTitleProp(props),
      subtitle: getText(props.Subtitle),
      tag: getText(props.Tag),
      date: dateStr,
      year,
      readTime: getText(props.ReadTime) || '5 min read',
    };
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithContent | null> {
  const response = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      and: [
        { property: 'Slug', rich_text: { equals: slug } },
        { property: 'Status', select: { equals: 'Published' } },
      ],
    },
  });

  const page = response.results[0] as any;
  if (!page) return null;

  const props = page.properties;
  const dateStr = getText(props.Date);
  const year = dateStr ? new Date(dateStr).getFullYear().toString() : '';

  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const markdown = n2m.toMarkdownString(mdBlocks).parent;
  const contentHtml = await marked(markdown);

  const wordCount = markdown.split(/\s+/).length;

  return {
    id: page.id,
    slug,
    title: getTitleProp(props),
    subtitle: getText(props.Subtitle),
    tag: getText(props.Tag),
    date: dateStr,
    year,
    readTime: getText(props.ReadTime) || estimateReadTime(wordCount),
    contentHtml,
  };
}
