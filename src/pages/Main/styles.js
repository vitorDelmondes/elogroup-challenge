import styled from "styled-components";

import { Input, Button } from "antd";

export const Container = styled.div`
  background-color: #ecf1f8;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  overflow: auto;
  flex-direction: row;
  background-color: #fff;
  width: 60%;
  height: 65%;
  border-radius: 10px;
`;

export const InputRadius = styled(Input)`
  border-radius: 5px;
`;

export const ButtomFilled = styled(Button)`
  border-radius: 5px;
  border: none;
`;

export const Row = styled.div`
  width: 60%;
`;
