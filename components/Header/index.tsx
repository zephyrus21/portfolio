import { Heading, SubHeading, Wrapper } from "./HeaderStyles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Wrapper>
      <SubHeading>Hi, my name is</SubHeading>
      <Heading>Piyush Pandey</Heading>
    </Wrapper>
  );
};

export default Header;
