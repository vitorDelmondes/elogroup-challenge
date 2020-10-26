import React from "react";

import { Container } from "./styles";

import Card from "../Card";

function List({ data, index: listIndex }) {
  return (
    <Container>
      <header>
        <h3>{data.title}</h3>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
