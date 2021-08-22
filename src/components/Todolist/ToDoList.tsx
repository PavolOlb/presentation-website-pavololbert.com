import { JsLeftBar } from "./JsLeftBar";
import { ToDoRight } from "./ToDoRight";
import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
`;
const DivLeft = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
`;

export class ToDoList extends React.Component {
  render() {
    return (
      <DivWrapper>
        <JsLeftBar />
        <ToDoRight />
      </DivWrapper>
    );
  }
}
