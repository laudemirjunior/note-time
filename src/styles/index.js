import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
outline: 0;
border: none;
font-family: 'Montserrat', sans-serif;
}
:root {
--white: #fff;
--snow: #F8F8F8;
--grey: #EFEFEF;
--black: #000;
--lightBlue: #80BBDF;
--darkBlue: #0077C0;
--red: #DB7070;
--liner: linear-gradient(150.58deg, rgba(15, 176, 176, 0.8) 0%, rgba(0, 47, 214, 0.8) 100%);
--shadow:box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
button, svg {
cursor: pointer;
}
`;
