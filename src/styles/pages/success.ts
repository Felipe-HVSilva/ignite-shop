import { styled } from ".."

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontWeight: "bold",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
})

export const ImagesContainer = styled("section", {
  display: "flex",
  alignItems: "center",
  marginTop: "3rem",

  "div + div": {
    marginLeft: "calc(-140px / 2)",
  },
})

export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  borderRadius: "50%",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
})
