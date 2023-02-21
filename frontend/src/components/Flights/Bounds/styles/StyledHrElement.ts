import styled from "styled-components";

export const StyledHrElement = styled.hr`
  border: 0.5px solid rgba(0, 0, 0, 0.513);
  width: 90%;
  margin-left: 2rem;

  @media screen and (max-width: 47.9em) {
    width: 95%;
    margin: auto;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    width: 91%;
    margin-left: 1rem;
  }
`;
