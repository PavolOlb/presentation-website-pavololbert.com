import { Cell } from "./OneCell";
import { checkWinner } from "./checkTheWinner";
import { theme } from "../../theme";
import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

type MyTypes = {
  cells: (null | string)[];
  setCells: (null | string)[];
  theNumberOfCell: number;
};
const H1TheFirst = styled.h1`
  font-size: 5em;
  font-weight: ${theme.tinyFont};
  margin: 0.2em 0;
  text-align: center;
  color: ${theme.brown};
  @media (${theme.width400}) {
    font-size: 3em;
  }
`;

const PNextPlayer = styled.p`
  font-weight: ${theme.boldFont};
  text-align: center;
  strong {
    color: ${theme.brown};
  }
`;
const DivTheGamePad = styled.div`
  margin: 1.5em auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 30em;
  background: ${theme.white};
  @media (${theme.width800}) {
    width: 23em;
  }
  @media (${theme.width400}) {
    width: 10em;
  }
`;
const ButtonReset = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 1.5em;
  padding: 0.5em 1em;
  border-radius: 5%;
  color: ${theme.brown};
  font-weight: bold;
  background: none;
  border: 1px solid ${theme.brown};
  cursor: pointer;
  :hover {
    background: ${theme.brown};
    color: ${theme.white};
    border: none;
  }
  @media (${theme.width400}) {
    font-size: 1em;
  }
`;
const NUMBER_OF_ROWS_AND_COLUMNS = 10;
const createCells = () =>
  Array.from({ length: NUMBER_OF_ROWS_AND_COLUMNS }, () =>
    Array.from({ length: NUMBER_OF_ROWS_AND_COLUMNS }, () => null)
  );

export const TheGame = () => {
  const [cells2D, setCells2D] = useState<(null | "X" | "O")[][]>(createCells());

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const resetTheGame = () => {
    setCells2D(createCells());
    setCurrentPlayer("X");
  };

  const winnerIsFound = (winner: "X" | "O") => {
    alert("The winner is " + winner);
    resetTheGame();
  };
  checkWinner(cells2D, winnerIsFound);
  const cell2DClicked = (theNumberOfColumn: number, theNumberOfRow: number) => {
    if (cells2D[theNumberOfColumn][theNumberOfRow] === null) {
      setCells2D((prev) => {
        return prev.map((row, index) =>
          index === theNumberOfColumn
            ? row.map((item, index) =>
                index === theNumberOfRow ? currentPlayer : item
              )
            : row
        );
      });

      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    } else {
      return;
    }
  };

  return (
    <div>
      <H1TheFirst>TicTacToe Game</H1TheFirst>
      <PNextPlayer>
        Next move is player <strong>{currentPlayer}</strong>
      </PNextPlayer>

      <DivTheGamePad>
        {cells2D.map((items, index) => {
          return (
            <div key={index}>
              {items.map((subItems, sIndex) => {
                return (
                  <Cell
                    key={`x${index}-y${sIndex}`}
                    cellContent={subItems}
                    numberOfRow={sIndex}
                    numberOfColumn={index}
                    onCellClick={cell2DClicked}
                    currentTurn={currentPlayer}
                  ></Cell>
                );
              })}
            </div>
          );
        })}
      </DivTheGamePad>
      <ButtonReset onClick={resetTheGame}>Reset the game</ButtonReset>
    </div>
  );
};
