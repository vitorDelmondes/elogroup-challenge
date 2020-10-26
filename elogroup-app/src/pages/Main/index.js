import React, { useState } from "react";
import produce from "immer";

import { Container, Card } from "./styles";

import Header from "../../components/Header";
import List from "../../components/List";
import { loadLists } from "../../services/api";
import BoardContext from "../../components/Card/context";

const data = loadLists();

function Main() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Header />
      <Container>
        <Card>
          {lists.map((item, index) => (
            <List key={item.title} data={item} index={index} />
          ))}
        </Card>
      </Container>
    </BoardContext.Provider>
  );
}

export default Main;
