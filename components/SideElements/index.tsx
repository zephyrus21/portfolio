import Link from "next/link";
import {
  GithubOutline,
  LinkedinOutline,
  TwitterOutline,
} from "@styled-icons/evaicons-outline";
import { Instagram } from "@styled-icons/fa-brands/Instagram";
import { Left, StyledLink, Right, StyledEmail } from "./SideElementsStyles";

interface SideElementsProps {}

const SideElements: React.FC<SideElementsProps> = ({}) => {
  return (
    <>
      <Left>
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
      </Left>
      <Right>
        <Link href='mailto:pandey.piyus@gmail.com' passHref>
          <StyledEmail>pandey.piyus@gmail.com</StyledEmail>
        </Link>
      </Right>
    </>
  );
};

export default SideElements;
