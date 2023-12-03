/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    black: "#000",
    blue: "#425af5",
    red: "#f24949",
    violet: "#9880e0",
    secondary: "#0b0e23",
  },
  background: {
    backgroundColor: "#425af5",
  },
  fontSizes: {
    small: "18px",
    medium: "20px",
    normal: "25px",
    large: "30px",
    larger: "50px",
    xl: "60px",
  },
  fontWeights: {
    medium: "500",
    bolder: "800",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

// background-image: linear-gradient( 0.2deg,  rgba(40, 173, 222,1) 4.8%, rgb(27, 76, 224) 85.5% );
