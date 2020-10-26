import styled from "styled-components";

export const Container = styled.div`
  padding: 2%;
  height: 100%;
  /* flex: 0 0 240px; */
  flex: 1;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  ul {
    margin-top: 30px;
  }
`;
