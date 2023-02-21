import { color } from "@/theme/variables";
import styled from "styled-components";

export const StyledDetailsBox = styled.div`
  padding: 1rem;
  background-color: ${color.secondaryBlueLight};
  width: 72.8rem;

  color: white;
  font-size: 1.6rem;

  transition: height 0.5s;

  @media screen and (max-width: 47.9em) {
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1.4rem;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    width: 54rem;
  }
`;
