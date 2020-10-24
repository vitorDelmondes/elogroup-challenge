import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";

import Routes from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
