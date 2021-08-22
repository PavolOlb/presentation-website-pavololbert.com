import { JokesContext } from "./LogicComponent";
import { chuckTheme } from "./chuck.theme";
import { theme } from "../../theme";
import React, { useContext, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
const fadeInJoke = keyframes`
0% {opacity: 0},
50% {opacity: 1}
`;
const DivCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4em;
`;
const DivJoke = styled.div`
  width: 50%;
  margin: 2em auto;
  border-radius: 5%;
  padding: 1em;
  box-shadow: ${chuckTheme.jokeBoxShadow} 0px 5px 15px;
  background: ${theme.white};
  display: flex;
  align-items: center;
  animation: 0.2s ${fadeInJoke} ease-out;
  @media (${theme.width760}) {
    width: 80%;
  }
`;
const PJoke = styled.p`
  font-weight: ${theme.boldFont};
  width: 100%;
  padding: 0 1em;
  text-align: center;
`;
type Props = {
  icon_url: string;
  value: string;
};

export const Joke = (props: Props) => {
  return (
    <DivJoke>
      <img src={props.icon_url} alt="" />
      <PJoke>
        <PJoke>
          {`"`}
          {props.value}
          {`"`}
        </PJoke>
      </PJoke>
    </DivJoke>
  );
};
