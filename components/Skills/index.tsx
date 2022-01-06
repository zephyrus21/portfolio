import {
  Heading,
  Paragraph,
  SkillsList,
  SkillsWrapper,
  SubHeading,
  Wrapper,
} from "../../styles/GlobalStyles";
import {
  Cplusplus,
  Javascript,
  Typescript,
  Java,
  Go,
  Nodedotjs,
  ReactLogo,
  Svelte,
  Nextdotjs,
  Docker,
  Linux,
  Graphql,
  Firebase,
  Visualstudiocode,
  Figma,
} from "@styled-icons/simple-icons";

interface SkillsProps {}

const Skills: React.FC<SkillsProps> = ({}) => {
  return (
    <Wrapper id='skills'>
      <Heading>Skills</Heading>
      <Paragraph>
        I&apos;ve worked with multiple technologies as a developer to develop &
        maintain my projects. Also I’ve good communication skills and always
        eager to learn new technologies and adding them to my portfolio.
      </Paragraph>
      <Paragraph>Below are some of my primary technical skills -</Paragraph>
      <SkillsWrapper>
        <SubHeading>Programming Languages</SubHeading>
        <SkillsList>
          <Cplusplus />
          <Javascript />
          <Typescript />
          <Java />
          <Go />
        </SkillsList>
      </SkillsWrapper>
      <SkillsWrapper>
        <SubHeading>Frameworks & Tools</SubHeading>
        <SkillsList>
          <Nodedotjs />
          <ReactLogo />
          <Svelte />
          <Nextdotjs />
          <Docker />
        </SkillsList>
        <SkillsList>
          <Linux />
          <Graphql />
          <Firebase />
          <Visualstudiocode />
          <Figma />
        </SkillsList>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
