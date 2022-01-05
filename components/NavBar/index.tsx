import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, NavMenu, StyledLink, Wrapper } from "./NavBarStyles";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 10 ? setSticky(true) : setSticky(false);
    }
  };

  return (
    <Wrapper sticky={sticky}>
      <Nav>
        <h1>Logo</h1>
        <NavMenu>
          <Link href='/' passHref>
            <StyledLink>About</StyledLink>
          </Link>
          <Link href='/' passHref>
            <StyledLink>Skills</StyledLink>
          </Link>
          <Link href='/' passHref>
            <StyledLink>Projects</StyledLink>
          </Link>
          <Link href='/' passHref>
            <StyledLink>Contact</StyledLink>
          </Link>
        </NavMenu>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
