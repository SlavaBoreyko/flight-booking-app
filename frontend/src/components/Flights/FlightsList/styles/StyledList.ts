import styled from "styled-components";

export const StyledList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 96%;
  margin: 0 2%;
  // FORM
  & form {
    width: 72.8rem;

    @media screen and (max-width: 47.9em) {
      width: 100%;
    }

    @media screen and (min-width: 48em) and (max-width: 64rem) {
      width: 54rem;
    }
  }
`;
