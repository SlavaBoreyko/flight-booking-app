import { fontSize } from "@/theme/variables";
import styled from "styled-components";

export const StyledTimeBold = styled.p`
  font-size: ${fontSize.titleDesktop};
  font-weight: 700;

  @media screen and (max-width: 64rem) {
    font-size: ${fontSize.titleTablet};
  }
`;
