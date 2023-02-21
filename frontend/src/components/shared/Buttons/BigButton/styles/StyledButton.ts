import { color, fontSize } from "@/theme/variables";
import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: ${color.primaryBlue};

  font-size: ${fontSize.btnTitleDesktop};
  font-weight: 700;
  color: #fff;

  padding: 1rem 4rem;
  border-radius: 2.4rem;
  transition: transform 0.5s;

  @media screen and (max-width: 64rem) {
    font-size: ${fontSize.btnTitleTablet};
    padding: 1rem 2rem;
  }

  &:active {
    background-color: ${color.primaryBlueDark};
    transform: scale(0.95);
  }

  &:hover {
    background-color: ${color.primaryBlueDark};
    transform: scale(0.97);
  }
`;
