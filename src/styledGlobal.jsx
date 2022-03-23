import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: hsl(217, 54%, 11%);
        font-family: 'Outfit', sans-serif;
    }
`;