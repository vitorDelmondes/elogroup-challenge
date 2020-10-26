import React, { useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Button, Dropdown } from "antd";

import {
  HomeOutlined,
  BarsOutlined,
  ToolOutlined,
  CloseCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

import Logo from "../../assets/logo-white.png";

const { Header } = Layout;

const bsStyle = { background: "#00000019", border: "none", borderRadius: 5 };

function HeaderComponent({ history }) {
  useEffect(() => {});

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#14222b",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="logo">
        <img src={Logo} alt="logo" style={{ width: 100 }} />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          // justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            type="primary"
            icon={<CloseCircleOutlined />}
            style={{ ...bsStyle, marginLeft: 10 }}
            onClick={() => {
              localStorage.clear();
              history.push('/');
              window.location.reload();
            }}
          >
            {window.innerWidth > 768 && "Sair"}
          </Button>
        </div>
      </div>
    </Header>
  );
}

export default HeaderComponent;
