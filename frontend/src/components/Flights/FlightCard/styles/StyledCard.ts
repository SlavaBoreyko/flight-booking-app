import styled from "styled-components";

export const StyledCard = styled.div`
  width: 72.8rem;
  display: flex;
  justify-content: flex-end;
  background-color: white;

  @media screen and (max-width: 47.9em) {
    width: 100%;
    flex-direction: column;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    width: 53.9rem;
  }
`;
