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

export const CardsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",

  marginTop: "2rem",

  ".card": {
    display: "flex",

    gap: "1.25rem",

    ".image-product": {
      width: "100%",
      maxWidth: 102,
      height: 93,
      borderRadius: 8,
      background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
      padding: "0.25rem",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      img: {
        objectFit: "cover",
      },
    },

    ".info-product": {
      span: {
        fontSize: "$md",
        lineHeight: "160%",
        color: "$gray300",

        display: "block",
      },

      strong: {
        fontSize: "$lg",
        color: "$gray100",
        lineHeight: "160%",

        display: "block",

        marginTop: "0.12rem",
      },

      button: {
        background: "transparent",
        border: "none",

        fontSize: "1rem",
        fontWeight: 700,
        color: "$green500",

        cursor: "pointer",

        marginTop: "0.5rem",

        transition: "all 0.2s",

        "&:hover": {
          color: "$green300",
        },
      },
    },
  },
})
