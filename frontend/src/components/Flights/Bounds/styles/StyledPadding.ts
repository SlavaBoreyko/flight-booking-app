import styled from "styled-components";

export const StyledPadding = styled.li`
  padding: 2rem 5rem 2rem 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 47.9em) {
    justify-content: center;
    padding: 2rem 4rem 2rem 1rem;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    padding: 2rem 4rem 2rem 1rem;
  }
`;
