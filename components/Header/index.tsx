import { Button, Heading, SubHeading, SubTitle, Wrapper } from "./HeaderStyles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Wrapper>
      <SubHeading>Hi, my name is</SubHeading>
      <Heading>Piyush Pandey</Heading>
      <SubTitle>I am a student and a passionate full stack developer</SubTitle>
      <SubTitle>
        looking for oppurtinities in different fields as well.
      </SubTitle>
      <Button
        href='https://drive.google.com/file/d/1wjn8sJSLxvd3sX8pFOlxHfZDMSAl1GRS/view?usp=sharing'
        target='_blank'>
        My Resume
      </Button>
    </Wrapper>
  );
};

export default Header;
