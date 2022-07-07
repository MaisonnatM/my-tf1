import styled from "@emotion/styled"

export const StyledContainer = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "row",
    gap: "24px",
    maxWidth: "1200px",
    position: "relative",

    "& > *": {
      flex: 1,
    },
  }
})

export const StyledNavigationButton = styled("button")<{
  side: "right" | "left"
}>(({ side }) => {
  return {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    height: "48px",
    width: "48px",
    border: "none",
    background: "#313132",
    boxShadow: "0px 2px 4px rgba(38, 40, 47, 0.4)",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",

    ...(side === "left" && {
      left: "-24px",
    }),
    ...(side === "right" && {
      right: "-24px",
    }),

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  }
})
