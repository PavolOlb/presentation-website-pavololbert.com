import { theme } from "../../theme";
import React, { useMemo, useState } from "react";
import styled from "styled-components";

const DivOneCell = styled.div<{ hoverContent; currentTurn: string }>`
  border: 1px solid ${theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  :hover:after {
    color: ${theme.brown};
    content: "${(p) => (p.hoverContent === null ? p.currentTurn : "")}";
  }
  @media (${theme.width800}) {
    width: 2.3em;
    height: 2.3em;
  }
  @media (${theme.width400}) {
    width: 1em;
    height: 1em;
  }
`;

export const Cell = (props: {
  cellContent: string | null;

  onCellClick: (numberOfColumn: number, numberOfRow: number) => void;
  currentTurn: string;
  numberOfRow: number;
  numberOfColumn: number;
}) => {
  return (
    <DivOneCell
      onClick={() => {
        props.onCellClick(props.numberOfColumn, props.numberOfRow);
      }}
      hoverContent={props.cellContent}
      currentTurn={props.currentTurn}
    >
      {props.cellContent}
    </DivOneCell>
  );
};
