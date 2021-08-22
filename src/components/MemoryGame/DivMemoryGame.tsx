import { MatchGame } from "./MemoryGame";
import { OneCard } from "./OneCard";
import { theme } from "../../theme";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const DivMemoryGame = styled.div`
  width: 39em;
  height: 39em;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (${theme.width800}) {
    width: 23em;
    height: 23em;
  }
`;
const H1TheFirst = styled.h1<{ font? }>`
  font-size: ${(p) => (p.font === "smaller" ? "2em" : "5em")};
  font-weight: ${theme.tinyFont};
  margin: 0.2em 0;
  text-align: center;
  color: ${theme.brown};
  span {
    color: ${theme.black};
  }
`;
export const TheMemoryGame = () => {
  const matchGame = React.useContext(MatchGame);
  return (
    <div>
      <H1TheFirst>Memory Game</H1TheFirst>

      <DivMemoryGame>
        {matchGame.characters.map((item, index) => {
          return (
            <OneCard
              key={index}
              id={index}
              image={item.image}
              itemID={item.id}
            />
          );
        })}

        <H1TheFirst font="smaller">
          Number of moves: <span>{matchGame.numberOfMoves}</span>
        </H1TheFirst>
      </DivMemoryGame>
    </div>
  );
};
