export const showDetailsStyle = (showDetails: boolean) =>
  showDetails
    ? {
        height: "4.5rem",
        opacity: "1",
        padding: "1rem",
      }
    : {
        height: "0",
        padding: "0",
        opacity: "0",
      };
