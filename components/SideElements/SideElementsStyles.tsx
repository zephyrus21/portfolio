import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

const afterElement = `::after {
  content: "";
  display: block;
  width: 3px;
  opacity: 80%;
  height: 90px;
  margin: 0px auto;
  border-radius: 100px;
  background-color: var(--secondary-text-color);
}`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  position: fixed;
  left: 50px;
  bottom: 0;

  ${afterElement}
`;

export const Right = styled.div`
  position: fixed;
  right: 50px;
  bottom: 0;

  ${afterElement}
`;

export const StyledEmail = styled.div`
  font-family: var(--secondary-font);
  writing-mode: vertical-rl;
  padding-bottom: 1.6rem;
  color: var(--secondary-text-color);
  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    transform: translateY(-6px);
    color: var(--primary-color);
  }
`;

export const StyledLink = styled.div`
  ${StyledIconBase} {
    color: var(--secondary-text-color);
    height: 26px;
    width: 26px;
    transition: all 0.4s;
  }

  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    transform: translateY(-6px);
    ${StyledIconBase} {
      color: var(--primary-color);
    }
  }
`;
