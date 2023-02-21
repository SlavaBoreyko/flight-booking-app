import { color, fontSize } from "@/theme/variables";
import styled from "styled-components";

export const StyledBox = styled.div`
  background-color: ${color.primaryOrange};

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 24rem;
  padding: 2rem;

  @media screen and (max-width: 47.9em) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem !important;
    width: 100%;
  }

  @media screen and (min-width: 48em) and (max-width: 64rem) {
    min-width: 18.5rem;
    padding: 1rem 0.25rem 1rem 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    height: 2rem;
    width: 2rem;
    background-color: ${color.primaryOrange};

    top: 50%;
    left: 0rem;
    transform: translate(-50%, -50%) rotate(45deg);

    @media screen and (max-width: 48em) {
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }

  & p {
    font-size: ${fontSize.titleDesktop};
    font-weight: 700;
    margin-bottom: 1rem;

    & span {
      font-size: ${fontSize.subtitleDesktop};
    }

    @media screen and (max-width: 48em) {
      margin: 0;
    }
    // for Tablet and Mobile also
    @media screen and (max-width: 64rem) {
      font-size: ${fontSize.titleTablet};
      & span {
        font-size: ${fontSize.subtitleTablet};
      }
    }
  }
`;
