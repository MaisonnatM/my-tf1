import styled from "@emotion/styled"

export const StyledImageContainer = styled("div")(() => {
  return {
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    height: "265px",
    width: "100%",
    transition: "all 0.3s ease-in-out",

    "&:hover": {
      transform: "scale(1.1)",
    },
  }
})

export const StyledProgramTitle = styled("h2")(() => {
  return {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1.4rem",
    lineHeight: "1.6rem",
  }
})

export const StyledProgram = styled("div")(() => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    alignContent: "center",
    cursor: "pointer",
  }
})

export const StyledAddButton = styled("button")(() => {
  return {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: "8px",
    height: "32px",
    width: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: "6px",
    right: "6px",
    border: "none",
    cursor: "pointer",
  }
})
