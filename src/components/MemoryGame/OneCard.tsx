import { MatchGame } from "./MemoryGame";
import { theme } from "../../theme";
import React, { FC, useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const DivOneCard = styled.div<{ flipped: boolean; length: number }>`
  position: relative;
  width: 9em;
  height: 9em;
  text-align: center;
  pointer-events: ${(p) => (p.flipped === true && length >= 2 ? "none" : "")};
  transition: transform 0.8s;
  transform-style: preserve-3d;
  margin: 0.3em;
  perspective: 1000px;
  transform: ${(p) =>
    p.flipped === true ? "rotateY(180deg)" : "rotateY(0deg)"};
  @media (${theme.width800}) {
    width: 5em;
    height: 5em;
  }
`;
const ImgStyled = styled.img`
  @media (${theme.width800}) {
    width: 5em;
    height: 5em;
  }
`;
const DivCards = styled.div<{ frontOrBack }>`
  background: ${(p) => (p.frontOrBack === "front" ? theme.white : theme.black)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9em;
  height: 9em;
  border-radius: 5%;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  transform: ${(p) => (p.frontOrBack === "front" ? "rotateY(180deg)" : "none")};
  @media (${theme.width800}) {
    width: 5em;
    height: 5em;
  }
`;
type cardProps = { id: number; image: string; itemID: number };
export const OneCard = (props: cardProps) => {
  const matchGame = useContext(MatchGame);

  const isCardOpen = matchGame.openCard.includes(props.id);
  const isCardMatched = matchGame.matchedCards.includes(props.itemID);

  const flipCard = isCardOpen || isCardMatched ? true : false;
  return (
    <DivOneCard
      flipped={flipCard}
      length={matchGame.openCard.length}
      onClick={() => {
        matchGame.handleClick(props.id);
      }}
    >
      <DivCards frontOrBack="front">
        <ImgStyled src={props.image} />
      </DivCards>
      <DivCards frontOrBack="back"></DivCards>
    </DivOneCard>
  );
};
