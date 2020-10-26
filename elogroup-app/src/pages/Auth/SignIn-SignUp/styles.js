import styled from "styled-components";

import {
  Input,
  Button,
} from "antd";

export const Container = styled.div`
  background-color: #14222b;
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

export const ContainerCenter = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: #ecf1f8;
  border-radius: 5px;
  margin-top: 4%;
  width: 45%;
  height: 40%;
  min-width: 180;
  max-width: 600;
`;

export const InputRadius = styled(Input)`
  border-radius: 5px;
`;

export const ButtomFilled = styled(Button)`
  border-radius: 5px;
  border: none;
`;
