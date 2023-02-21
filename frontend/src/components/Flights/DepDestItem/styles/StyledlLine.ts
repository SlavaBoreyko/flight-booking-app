import { color } from "@/theme/variables";
import styled from "styled-components";

export const StyledLine = styled.div`
  background-color: ${color.primaryOrange};
  height: 2px;
  position: relative;

  margin-top: 0.5rem;

  &::before {
    position: absolute;
    content: "";
    height: 0.8rem;
    width: 0.8rem;
    border: 2px solid ${color.primaryOrange};
    border-radius: 0.8rem;
    left: -1.2rem;
    top: -0.5rem;
  }
  &::after {
    position: absolute;
    content: "";
    height: 0.8rem;
    width: 0.8rem;
    border: 2px solid ${color.primaryOrange};
    border-radius: 0.8rem;
    right: -1.2rem;
    top: -0.5rem;
  }
`;
