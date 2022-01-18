import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../../context/Globalcontext";
import { StyledEmail, StyledLink } from "../SideElements/SideElementsStyles";
import { Content, Social, Wrapper } from "./FooterStyles";
import {
  GithubOutline,
  LinkedinOutline,
  TwitterOutline,
} from "@styled-icons/evaicons-outline";
import { Instagram } from "@styled-icons/fa-brands/Instagram";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const { width }: any = useContext(GlobalContext);

  return (
    <Wrapper>
      {width ? null : (
        <Social>
          <StyledLink>
            <Link href='https://github.com/zephyrus21' passHref>
              <a target='_blank'>
                <GithubOutline />
              </a>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link href='https://twitter.com/zephyrus_io' passHref>
              <a target='_blank'>
                <TwitterOutline />
              </a>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link href='https://www.instagram.com/zephyrus.io/' passHref>
              <a target='_blank'>
                <Instagram />
              </a>
            </Link>
          </StyledLink>
          <StyledLink>
            <Link href='https://www.linkedin.com/in/zephyrus21' passHref>
              <a target='_blank'>
                <LinkedinOutline />
              </a>
            </Link>
          </StyledLink>
        </Social>
      )}
      <Link href='https://portfolio.piyushpandey.tech' passHref>
        <Content>Designed & Developed by Piyush</Content>
      </Link>
    </Wrapper>
  );
};

export default Footer;
