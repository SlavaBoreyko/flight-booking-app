import { fontSize } from "@/theme/variables";
import styled from "styled-components";

export const StyledTime = styled.div`
  padding: 1rem;
  line-height: 1.05;
  font-size: ${fontSize.subtitleDesktop};

  @media screen and (max-width: 64rem) {
    font-size: ${fontSize.subtitleTablet};
  }
`;
