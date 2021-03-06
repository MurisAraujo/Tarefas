import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background-color: #C9C9C9;
  }

  a {
  text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  html,
  body,
  div,
  span,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  a,
  em,   
  img,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  article,
  footer,
  header,
  nav,
  section,
  main {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  ul {
    font-size: 1em;
    font-weight: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Titillium Web", sans-serif;
  }

  input:focus {
    &:focus {
      outline: none;
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #000; 
  }

  button{
    cursor:pointer;
  }

  button, input{
    border:none;
    border-radius: 3px;
  }

  
`; 
