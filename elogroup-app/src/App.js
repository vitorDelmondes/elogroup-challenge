import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";

import GlobaStyle from "./styles/global";
import Routes from "./router";

const App = () => {
  return (
    <>
      <GlobaStyle />
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
