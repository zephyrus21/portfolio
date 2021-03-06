import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 12rem 16rem;
  padding-bottom: 17rem;
  background: url("/images/home.png");
  background-size: cover;
  /* background-attachment: fixed; */
  @media only screen and (max-width: 900px) {
    & {
      padding: 12rem 8rem;
    }
  }

  @media only screen and (max-width: 500px) {
    & {
      padding: 15rem 3rem;
      padding-bottom: 12rem;
    }
  }
`;

export const SubHeading = styled.h2`
  font-family: var(--secondary-font);
  font-size: 1.7rem;
  color: var(--primary-color);
  @media only screen and (max-width: 900px) {
    & {
      font-size: 1.3rem;
    }
  }
`;

export const Heading = styled.h1`
  font-size: 6.85rem;
  color: var(--primary-text-color);
  letter-spacing: 0.04em;
  transform: translateX(-4px);
  padding: 30px 0;
  @media only screen and (max-width: 900px) {
    & {
      font-size: 4rem;
    }
  }
`;

export const SubTitle = styled.p`
  padding-bottom: 1rem;
  font-size: 1.85rem;
  color: var(--primary-text-color);
  font-weight: 400;
  opacity: 50%;
  letter-spacing: 0.02em;
`;

export const Button = styled.a`
  /* text-decoration: none; */
  display: inline-block;
  font-family: var(--secondary-font);
  margin-top: 30px;
  font-size: 1.2rem;
  letter-spacing: 0.14em;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: var(--primary-color);
  border: solid 3px var(--primary-color);
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(100, 255, 219, 0.2);
  }
`;
