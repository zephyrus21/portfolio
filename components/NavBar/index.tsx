import Link from "next/link";
import { useEffect, useState } from "react";
import { Nav, NavMenu, StyledLink, Wrapper, Imagee } from "./NavBarStyles";

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

  // const removeHash = () => {
  //   console.log("Hello");
  //   history.pushState(
  //     "",
  //     document.title,
  //     window.location.pathname + window.location.search
  //   );
  // };

  return (
    <Wrapper sticky={sticky}>
      <Nav>
        <Link passHref href='#'>
          <Imagee
            src='/images/logo.svg'
            alt='logo'
            width='50px'
            height='50px'
          />
        </Link>
        <NavMenu>
          <Link href='#about' passHref>
            <StyledLink>About</StyledLink>
          </Link>
          <Link href='#skills' passHref>
            <StyledLink>Skills</StyledLink>
          </Link>
          <Link href='#projects' passHref>
            <StyledLink>Projects</StyledLink>
          </Link>
          <Link href='#contact' passHref>
            <StyledLink>Contact</StyledLink>
          </Link>
        </NavMenu>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
