import styled from "styled-components";
import { color } from "@/theme/variables";
import { StyledDetailsBox } from "./StyledDetailsBox";

export const StyledErrorBox = styled(StyledDetailsBox)`
  background-color: ${color.error};
  display: flex;
  justify-content: right;
  align-items: center;
  text-align: right;
`;
