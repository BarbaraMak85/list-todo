import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Root from "./root/Root";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
