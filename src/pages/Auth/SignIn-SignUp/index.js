import React, { useState } from "react";

import {
  Container,
  ContainerCenter,
  InputRadius,
  ButtomFilled,
} from "./styles";
import {Form, Button, Input, Spin, Modal, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import Logo from "../../../assets/logo-white.png";

const SignIn = ({ history }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const [loading, setLoaging] = useState(false);
  const [loadingRefresh, setLoadingRefresh] = useState(false);
  const [visible, setVisible] = useState(false);

  const login = () => {
    setLoaging(true);
    setTimeout(() => {
      setLoaging(false);
      history.push('/main');
    }, 2000)
  };

  const register = () => {
    setLoadingRefresh(true);
    setTimeout(() => {
      message.success('Cadastro realizado com sucesso!');
      setVisible(false);
    })
  }

  return (
    <Container>
      <div>
        <img src={Logo} alt="logo-white"></img>
      </div>
      <ContainerCenter>
        <Form
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={login}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Usuário"
            name="user"
            rules={[
              { required: true, message: "Por favor, insira seu usuário" },
            ]}
          >
            <Input
              type="text"
              // value={user}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Senha"
            name="password"
            rules={[
              { required: true, message: "Por favor, insira sua senha" },
            ]}
          >
            <Input.Password
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button width="30px" type="primary" htmlType="submit">
                {loading ? <Spin indicator={antIcon} /> : "Entrar"}
              </Button>

              <Button type="text" onClick={() => setVisible(true)}>
                Registre-se
              </Button>
            </div>
          </Form.Item>
        </Form>

        <Modal
          visible={visible}
          title="Registro"
          onCancel={() => setVisible(false)}
          footer={[
            <ButtomFilled
              onClick={() => {
                register();
              }}
              type="primary"
              style={{
                width: "100%",
                color: "#fff",
              }}
            >
              {loadingRefresh ? <Spin indicator={antIcon} /> : "Registrar"}
            </ButtomFilled>,
          ]}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              backgroundColor: "#14222b",
              padding: "5px",
              marginBottom: "30px",
            }}
          >
            <img src={Logo} alt="logo-white"></img>
          </div>
          <p>Usuário</p>

          <InputRadius
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          />
          <p>Senha</p>

          <InputRadius
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          />
          <p>Confirmação de Senha</p>

          <InputRadius
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          />
        </Modal>
      </ContainerCenter>
    </Container>
  );
};

export default SignIn;
