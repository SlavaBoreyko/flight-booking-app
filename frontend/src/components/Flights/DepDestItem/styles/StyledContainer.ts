import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.8fr 1fr;
  width: 34rem;

  @media screen and (max-width: 47.9em) {
    width: 100%;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    width: 28rem;
  }
`;
