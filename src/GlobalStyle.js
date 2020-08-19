import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(90deg, rgba(194,186,186,1) 0%, rgba(40,40,40,1) 0%, rgba(88,88,88,1) 100%);
  color: white;
}

* { 
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

::-webkit-scrollbar { width: 0 !important }

ol, ul {
  list-style: none;
}

ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

`