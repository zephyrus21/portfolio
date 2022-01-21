import {
  Wrapper,
  Heading,
  Paragraph,
  StyledList,
  ListWrapper,
} from "../../styles/GlobalStyles";
import { RightArrow } from "@styled-icons/boxicons-solid/";

interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
  return (
    <Wrapper id='about'>
      <Heading>About Me</Heading>
      <Paragraph>
        Hello! My name is Piyush Pandey (aka Purusottam) and I love to create
        things on internet I have started my devloping journey back in 2019
        summer and I am a passionate full stack developer with adding more
        technologies into my array. I started from frontend using React.js and
        it’s frameworks like Next.js along with many packages and then went on
        to backend development with Node.js Express.
      </Paragraph>
      <Paragraph>
        I also code in C++, Java and Go and always ready to learn new and also
        have little knowledge on DevOps using Docker and do some UI/UX designs
        on Figma.
      </Paragraph>
      <Paragraph>
        I am currently a student pursuing B.Tech in Computer Science and
        Engineering.
      </Paragraph>
      <Paragraph>
        Here are a few technologies I’ve been working with recently -
      </Paragraph>
      <ListWrapper>
        <StyledList>
          <RightArrow />
          Golang
        </StyledList>
        <StyledList>
          <RightArrow />
          Ethereum
        </StyledList>
        <StyledList>
          <RightArrow />
          Solidity
        </StyledList>
        <StyledList>
          <RightArrow />
          Blockchain
        </StyledList>
      </ListWrapper>
    </Wrapper>
  );
};

export default About;
