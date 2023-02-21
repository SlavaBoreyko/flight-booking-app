import styled from "styled-components";

export const StyledLogoImg = styled.img`
  height: 4rem;

  @media screen and (max-width: 47.9em) {
    height: 3rem;
    align-self: flex-start;
    justify-self: flex-end;
    margin-top: -1.5rem;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    height: 3rem;
    align-self: flex-start;
    justify-self: flex-end;
    margin-top: -1rem;
    margin-right: -5rem;
  }
`;
