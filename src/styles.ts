import { createGlobalStyle, css } from 'styled-components'

export const colors = {
    black: '#000',
    orange: 'darkorange',
}

export const mixins = {
    contentWide: css`
        max-width: 1280px;
        width: 90%;
        padding: 5px 5%;
        margin: 0 auto;
    `,
    contentPadding: css`
        position: relative;
        padding: 40px 1em;
    `,
    drawParts: css`
        background-color: ${colors.black};
        position: absolute;
    `,
    buttonMain: css`
        background-color: ${colors.orange};
        margin: 2px;
        min-width: 50px;
        min-height: 50px;

        &:hover {
            border: 1px ${colors.black} solid;
        }

        &:disabled {
            background-color: azure;
        }
    `,
}

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
`
