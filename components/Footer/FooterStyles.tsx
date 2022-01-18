import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2.2rem 1rem;
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
  font-size: 1.2rem;
  color: var(--secondary-text-color);
  font-family: var(--secondary-font);
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.4rem;
`;
