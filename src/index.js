import React from "react"
import App from "./App"
import "./index.css"
import 'antd/dist/antd.css';

import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import "react-app-polyfill/ie11"
import "react-app-polyfill/stable"

const rootElement = document.getElementById("root")

render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  rootElement
)
