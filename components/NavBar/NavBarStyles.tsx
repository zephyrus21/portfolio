import Image from "next/image";
import styled from "styled-components";

interface WrapperProps {
  sticky: boolean;
}

export const Imagee = styled(Image)`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const Wrapper = styled.div<WrapperProps>`
  height: ${(props) => (props.sticky ? "70px" : "100px")};
  position: fixed;
  box-shadow: ${(props) =>
    props.sticky ? "0 10px 30px -10px rgba(16, 32, 61, 0.8)" : ""};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  background-color: rgba(15, 22, 36, 0.5);
  backdrop-filter: blur(10px);
  z-index: 11;
  transition: all 0.4s ease-in-out;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

export const StyledLink = styled.a`
  font-family: var(--secondary-font);
  font-size: 1.4rem;
  padding: 0 1rem;
  text-decoration: none;
  color: white;
  transition: all 0.4s ease-out;

  &:hover {
    color: var(--primary-color);
    transform: translateY(-6px);
  }
`;
