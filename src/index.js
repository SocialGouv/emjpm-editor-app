import React from "react";
import ReactDOM from "react-dom";
import { css, Global } from "@emotion/core";
import App from "./App";
import { GlobalStyle } from "@socialgouv/emjpm-ui-global-style";
import theme from "@socialgouv/emjpm-ui-theme";
import { ThemeProvider } from "theme-ui";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Global
      styles={css`
        body,
        html,
        div#__next {
          font-size: 14px;
          font-family: "Open Sans", sans-serif;
          background: #f2f5f9;
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
