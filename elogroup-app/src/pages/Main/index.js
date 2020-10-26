import React, { useState } from "react";
import produce from "immer";

import { Container, Card, ButtomFilled, InputRadius, Row } from "./styles";
import { Button, Modal, message, Spin, Checkbox } from "antd";

import Header from "../../components/Header";
import List from "../../components/List";
import { loadLists } from "../../services/api";
import BoardContext from "../../components/Card/context";
import { LoadingOutlined } from "@ant-design/icons";

import Logo from "../../assets/logo-white.png";


const data = loadLists();

function Main({ history }) {
  const [lists, setLists] = useState(data);
  const [visible, setVisible] = useState(false);
  const [loadingRefresh, setLoadingRefresh] = useState(false);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  const saveLead = () => {
    setLoadingRefresh(true);
    setTimeout(() => {
      message.success('Cadastro realizado com sucesso!');
      setVisible(false);
    })
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Header history={history}/>
      <Container>
        <Row>

        <Button type="primary" onClick={() => { setVisible(true)}}>
          Criar
        </Button>
        </Row>
        <Card>
          {lists.map((item, index) => (
            <List key={item.title} data={item} index={index} />
          ))}
        </Card>
      </Container>

      <Modal
        visible={visible}
        title="Novo Lead"
        onCancel={() => setVisible(false)}
        footer={[
          <ButtomFilled
            onClick={() => {
              saveLead();
            }}
            type="primary"
            style={{
              width: "100%",
              color: "#fff",
            }}
          >
            {loadingRefresh ? <Spin indicator={antIcon} /> : "Salvar"}
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
        <p>Nome</p>

        <InputRadius
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />
        <p>Telefone</p>

        <InputRadius
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />
        <p>Email</p>

        <InputRadius
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />

        <p>Oportunidades</p>
        <Checkbox value="RPA">RPA</Checkbox>
        <Checkbox value="Produto Digital">Produto Digital</Checkbox>
        <Checkbox value="Analytcs">Analytcs</Checkbox>
        <Checkbox value="BPM">BPM</Checkbox>

      </Modal>
    </BoardContext.Provider>
  );
}

export default Main;
