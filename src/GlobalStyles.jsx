import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: poppins,sans-serif;
        width: 100%;
        min-height: 100vh;
        text-transform: capitalize;
    }

    ul {
        list-style-type: none;
    }

`;

export default GlobalStyles;
