import * as Dialog from "@radix-ui/react-dialog"
import { styled } from "../../styles"

export const StyledContent = styled(Dialog.Content, {
  positon: "relative",

  background: "$gray800",

  width: "30rem",
  height: "100vh",

  position: "absolute",
  top: 0,
  right: 0,

  padding: "4.5rem 3rem 3rem",

  display: "flex",
  flexDirection: "column",

  footer: {
    marginTop: "auto",

    ".quantity": {
      display: "flex",
      justifyContent: "space-between",

      span: {
        fontSize: "1rem",
        color: "$gray100",
      },

      strong: {
        fontSize: "$lg",
        color: "$gray300",
      },
    },

    ".price": {
      display: "flex",
      justifyContent: "space-between",

      marginTop: "0.44rem",

      span: {
        fontSize: "$md",
        fontWeight: 700,
        color: "$gray100",
      },

      strong: {
        fontSize: "$xl",
        fontWeight: 700,
        color: "$gray100",
      },
    },

    button: {
      width: "100%",
      background: "$green500",

      cursor: "pointer",

      color: "$white",

      fontSize: "$md",
      fontWeight: 700,

      marginTop: "3.44rem",

      padding: "1.25rem 2rem",
      border: "none",
      borderRadius: "0.5rem",

      transition: "background 0.2s ease",

      "&:hover": {
        background: "$green300",
      },
    },
  },
})

export const StyledClose = styled(Dialog.Close, {
  position: "absolute",
  top: 24,
  right: 24,

  background: "transparent",
  border: "none",
  cursor: "pointer",
})
