import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Layout } from "antd";
import "./App.css";

import GlobaStyle from "./styles/global";
import Routes from "./router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <DndProvider backend={HTML5Backend}>
            <Routes />
          </DndProvider>
        </Layout>
      </BrowserRouter>

      <GlobaStyle />
    </>
  );
};

export default App;
