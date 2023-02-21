import { fontSize } from "@/theme/variables";
import styled from "styled-components";

export const StyledMessage = styled.div`
  margin: 2rem;
  text-align: center;
  & h2 {
    font-size: ${fontSize.titleDesktop};
    font-weight: 700;
  }

  & p {
    font-size: ${fontSize.subtitleDesktop};
  }
`;
