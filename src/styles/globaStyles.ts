import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

  *{
    font-family: 'Mulish', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0px;
  }

  button{
    cursor:pointer;
  }
  html,body, #root{
    min-height:100vh;
    overflow:hidden;
    -webkit-font-smoothing:antialised !important;
  }

`