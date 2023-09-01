import { styled } from "../../../styles"

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
