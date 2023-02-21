import styled from "styled-components";

export const StyledContainer = styled.div`
  font-size: 1.4rem;
  margin: 1rem 1rem 1rem 0;

  @media screen and (max-width: 47.9em) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    font-size: 1.6rem;
  }
`;

export const StyledSelect = styled.select`
  box-shadow: none;
  outline: none;

  font-size: 1.4rem;
  font-weight: 700;
  color: #131313;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 0.5px solid #000000a0;

  @media screen and (max-width: 47.9em) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    font-size: 1.6rem;
  }
`;

export const StyledLabel = styled.label`
  margin-right: 0.5rem;
`;
