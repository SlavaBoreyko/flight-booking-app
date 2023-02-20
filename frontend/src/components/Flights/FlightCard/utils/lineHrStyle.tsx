export const lineHrStyle = (index: number) => {
  let line = null;
  let paddingTop = { paddingTop: "0" };

  if (index > 0) {
    line = <hr />;
    paddingTop = { paddingTop: "2rem" };
  }
  return { line, paddingTop };
};
