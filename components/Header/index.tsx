import { Button, Heading, SubHeading, SubTitle, Wrapper } from "./HeaderStyles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Wrapper id=''>
      <SubHeading>Hi, my name is</SubHeading>
      <Heading>Piyush Pandey</Heading>
      <SubTitle>I am a student and a passionate full stack developer</SubTitle>
      <SubTitle>
        looking for oppurtinities in different fields as well.
      </SubTitle>
      <Button
        href='https://drive.google.com/file/d/1QQmq0W7XY_eZrSTffC5iBx-LKcL5Dq3l/view?usp=sharing'
        target='_blank'>
        My Resume
      </Button>
    </Wrapper>
  );
};

export default Header;
