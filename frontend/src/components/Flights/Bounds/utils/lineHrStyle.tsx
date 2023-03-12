import { StyledHrElement } from "@/components/flights/Bounds/styles";

export const lineHrStyle = (index: number) => {
  let line = null;
  let paddingTop = { paddingTop: "0" };

  if (index > 0) {
    line = <StyledHrElement />;
    paddingTop = { paddingTop: "2rem" };
  }
  return { line, paddingTop };
};
