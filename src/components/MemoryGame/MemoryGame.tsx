import { OneCard } from "./OneCard";
import { TheMemoryGame } from "./DivMemoryGame";
import { shuffle } from "./arrayUtils";
import { theme } from "../../theme";
import Avalue from "./images/Avalue.png";
import Bvalue from "./images/Bvalue.png";
import Cvalue from "./images/Cvalue.png";
import Dvalue from "./images/Dvalue.png";
import Evalue from "./images/Evalue.png";
import Fvalue from "./images/Fvalue.png";
import Gvalue from "./images/Gvalue.png";
import Hvalue from "./images/Hvalue.png";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

type MatchContext = {
  openCard: number[];
  setOpenCard: React.Dispatch<React.SetStateAction<number[]>>;
  matchedCards: number[];
  setMatchedCards: React.Dispatch<React.SetStateAction<number[]>>;
  handleClick: (id: number) => void;
  characters: {
    id: number;
    name: string;
    image: string;
  }[];
  numberOfMoves: number;
};
export const MatchGame = React.createContext<MatchContext>(null as any);

// Inspiration : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

const getCardsValues = () => {
  return [
    { id: 1, name: "Avalue", image: Avalue },
    { id: 2, name: "Bvalue", image: Bvalue },
    { id: 3, name: "Cvalue", image: Cvalue },
    { id: 4, name: "Dvalue", image: Dvalue },
    { id: 5, name: "Evalue", image: Evalue },
    { id: 6, name: "Fvalue", image: Fvalue },
    { id: 7, name: "Gvalue", image: Gvalue },
    { id: 8, name: "Hvalue", image: Hvalue },
  ];
};
const shuffledCards = shuffle([...getCardsValues(), ...getCardsValues()]);

export const MemoryGame = () => {
  const [characters, setCharacters] = useState(shuffledCards);
  const [openCard, setOpenCard] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [numberOfMoves, setnumberOfMoves] = useState<number>(0);

  const handlePairs = () => {
    let firstCard = characters[openCard[0]];
    let secondCard = characters[openCard[1]];

    if (secondCard && firstCard.id === secondCard.id) {
      if (matchedCards.includes(firstCard.id)) return;
      else setMatchedCards((prev) => [...prev, firstCard.id]);
    }
    if (openCard.length === 2) {
      setTimeout(() => {
        setOpenCard((prev) => {
          return prev.length === 2 ? [] : prev;
        });
        setnumberOfMoves((prev) => prev + 1);
      }, 1000);
    }
    if (matchedCards.length === 8) {
      alert("You have won the game");
    }
  };
  const handleClick = (id: number) => {
    if (openCard.length === 2) return;
    setOpenCard((prev) => [...prev, id]);
  };
  React.useEffect(() => {
    handlePairs();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MatchGame.Provider
      value={{
        openCard,
        setOpenCard,
        matchedCards,
        setMatchedCards,
        handleClick,
        characters,
        numberOfMoves,
      }}
    >
      <TheMemoryGame />
    </MatchGame.Provider>
  );
};
