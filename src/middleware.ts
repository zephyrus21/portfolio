import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  const contentType = response.headers.get('content-type');

  // Ensure HTML responses declare charset in the HTTP header, not just the
  // <meta charset> tag, so clients don't have to sniff the encoding.
  if (contentType?.startsWith('text/html') && !/charset=/i.test(contentType)) {
    response.headers.set('content-type', `${contentType}; charset=utf-8`);
  }

  return response;
});
