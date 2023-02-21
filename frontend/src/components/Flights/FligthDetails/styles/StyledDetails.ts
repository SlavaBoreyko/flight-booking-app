import { fontSize } from "@/theme/variables";
import styled from "styled-components";

export const StyledDetails = styled.div`
  font-size: ${fontSize.subtitleDesktop};
  font-weight: 500;
  display: flex;
  justify-content: space-between;

  & span {
    font-weight: 300;
  }

  @media screen and (max-width: 47.9em) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    // padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    font-size: ${fontSize.subtitleTablet};
  }
`;
