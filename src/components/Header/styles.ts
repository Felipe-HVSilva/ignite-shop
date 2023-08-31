import { styled } from "../../styles"

export const HeaderContainer = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",

  button: {
    padding: "0.75rem",
    borderRadius: "0.375rem",
    backgroundColor: "$gray800",
    border: "none",

    position: "relative",

    cursor: "pointer",

    span: {
      top: "-10px",
      right: "-10px",
      position: "absolute",

      background: "$green300",
      borderRadius: "62.5rem",

      width: 24,
      height: 24,

      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      color: "white",
      fontSize: "0.875rem",
      fontWeight: 700,
    },
  },
})
