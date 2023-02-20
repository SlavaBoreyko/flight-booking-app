export const showErrorBoxStyle = (error: boolean) =>
  error
    ? {
        height: "3rem",
        opacity: "1",
        padding: "1rem",
      }
    : {
        height: "0",
        padding: "0",
        opacity: "0",
      };
