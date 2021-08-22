import { CounterTemplate } from "./CounterApp";
import { Provider, useDispatch, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { counter } from "./counter";
import { delay } from "../ChuckNorris/timeUtils";
import { theme } from "../../theme";
import React, { useContext, useMemo, useReducer, useState } from "react";

import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {opacity: 0}
100% {opacity: 1}`;
const H1TheFirst = styled.h1`
  font-size: 5em;
  font-weight: 100;
  margin: 0.5em 0;
  text-align: center;
  color: ${theme.brown};
`;
const H1Number = styled.h1`
  background: ${theme.white};
  font-size: 10em;
  padding-bottom: 0.3em;
  text-align: center;
  font-weight: ${theme.boldFont};
  color: ${theme.black};
  margin: 0 auto;
  margin-bottom: 0.5em;
`;
const ErrorState = styled.div`
  position: absolute;
  bottom: 10%;
  left: 40%;
  font-size: 1em;
  padding: 1em 1em;
  text-align: center;
  border-radius: 10px;
  font-weight: ${theme.boldFont};
  background: ${theme.red};
  color: ${theme.white};
  animation: 1s ${fadeIn} ease-out;
`;
const ButtonOperation = styled.button`
  background: ${theme.white};
  border: 1px solid ${theme.brown};
  font-weight: ${theme.boldFont};
  padding: 1em 2em;
  width: 45%;
  margin-bottom: 1em;
  cursor: pointer;
  border-radius: 10px;
  :hover {
    background: ${theme.red};
    color: ${theme.white};
  }
`;
const DivButtons = styled.div`
  width: 40%;
  flex-wrap: wrap;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const combinedReducers = combineReducers({
  counter: counter,
});
export let counterStore = createStore(combinedReducers);
export const CounterApp = () => {
  return (
    <Provider store={counterStore}>
      <CounterTemplate />
    </Provider>
  );
};
