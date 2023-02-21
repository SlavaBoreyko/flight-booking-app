import { color } from "@/theme/variables";
import styled from "styled-components";

export const StyledLinkBtn = styled.button`
  border: none;
  cursor: pointer;

  font-size: 1.2rem;
  text-decoration: underline;
  padding: 0.7rem 1rem 0 1rem;

  background-color: transparent;

  &:hover {
    color: ${color.primaryBlue};
  }

  &:active {
    color: ${color.primaryBlueDark};
  }

  @media screen and (max-width: 64rem) {
    font-size: 1rem;
  }
`;
