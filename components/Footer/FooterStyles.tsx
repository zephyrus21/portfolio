import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2.4rem 1rem;
  background: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 500px) {
  }
`;

export const Content = styled.div`
  font-size: 1.3rem;
  color: var(--secondary-text-color);
  font-family: var(--secondary-font);
  padding-bottom: 1rem;
  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    color: var(--primary-color);
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.8rem;
  padding-bottom: 2rem;
`;
