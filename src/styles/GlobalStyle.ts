import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { RESPONSIVE } from './responsive';

const GlobalStyle = createGlobalStyle` 
  ${reset} 

    html,body {
      font-size: 10px;

      @media ${RESPONSIVE.tablet} {
        font-size: 8px;
      }
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }

    h2{
      &#swal2-title{
        line-height: 1.4;
      }
    }
`;

export default GlobalStyle;
