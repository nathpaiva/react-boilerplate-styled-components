import { injectGlobal } from 'styled-components';

export default injectGlobal`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden;
    font-size: 10px;
    font-family: "Roboto", sans-serif;
    line-height: 1;
    color: #414141;
    font-weight: 400;
    background-color: #F1F1F1;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ol, ul {
    list-style: none;
  }

  p {
    font-size: 1.2em;
    padding: 5px 0;
  }

  label, input {
    font-size: 1.2em;
  }
`;
