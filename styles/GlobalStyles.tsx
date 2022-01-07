import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Wrapper = styled.div`
  background-color: var(--bg-color);
  padding: 10rem 16rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    & {
      padding: 12rem 8rem;
    }
  }
  @media only screen and (max-width: 500px) {
    & {
      padding: 12rem 3rem;
    }
  }
`;

export const Heading = styled.h1`
  font-family: var(--secondary-font);
  font-size: 3.4rem;
  font-weight: 600;

  ::before {
    content: "";
    margin-bottom: 14px;
    display: block;
    height: 4px;
    width: 70px;
    border-radius: 50px;
    background-color: var(--primary-color);
  }
`;

export const SubHeading = styled.h1`
  font-family: var(--secondary-font);
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;
  margin-left: 1.5rem;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    transform: translateY(-50%);
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 50px;
    background-color: var(--primary-color);
  }
`;

export const Paragraph = styled.p`
  margin-top: 20px;
  color: var(--secondary-text-color);
  opacity: 80%;
  font-size: 1.2rem;
  line-height: 3rem;
  font-weight: 500;
  letter-spacing: 0.1em;
`;

export const ListWrapper = styled.div`
  max-width: 24.5rem;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  color: var(--secondary-text-color);
  font-weight: 600;
  font-size: 1.4rem;
`;

export const SkillsWrapper = styled.div`
  max-width: 800px;
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`;

export const SkillsList = styled.div`
  ${StyledIconBase} {
    color: var(--primary-text-color);
    height: 3.5rem;
    width: 3.5rem;
    transition: all 0.4s;
  }

  ${StyledIconBase}:hover {
    color: var(--primary-color);
    transform: translateY(-4px);
  }

  margin-left: 20px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    ${StyledIconBase} {
      height: 2.8rem;
      width: 2.8rem;
    }
  }
`;

export const StyledList = styled.div`
  ${StyledIconBase} {
    color: var(--primary-color);
    height: 1.15rem;
    width: 1.15rem;
    transition: all 0.4s;
  }

  font-family: var(--secondary-font);
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.4s;

  &:hover {
    transform: translateX(2px);
    color: var(--primary-color);
  }
`;
