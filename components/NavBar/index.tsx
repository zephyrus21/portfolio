import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { GlobalContext } from "../../context/Globalcontext";
import {
  Nav,
  NavMenu,
  StyledLink,
  Wrapper,
  Imagee,
  SideMenu,
} from "./NavBarStyles";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { width }: any = useContext(GlobalContext);

  const [sideBarOpen, setSideBarOpen] = useState(false);
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
        <Link passHref href='#'>
          <a>
            <Imagee
              src='/images/logo.svg'
              alt='logo'
              width='50px'
              height='50px'
            />
          </a>
        </Link>
        {width ? (
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
        ) : (
          <>
            <div
              style={{
                zIndex: 12,
              }}
              onClick={() => {
                setSideBarOpen(!sideBarOpen);
              }}>
              <Hamburger />
            </div>
            <SideMenu sideBarOpen={sideBarOpen}>
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
            </SideMenu>
          </>
        )}
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
