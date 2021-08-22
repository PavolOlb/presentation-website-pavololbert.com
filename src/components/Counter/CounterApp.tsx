import { combineReducers, createStore } from "redux";
import { delay } from "../ChuckNorris/timeUtils";
import { mathOperations } from "./mathActions";
import { theme } from "../../theme";
import { useDispatch, useSelector } from "react-redux";
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
  padding: 0.3em;
  text-align: center;
  font-weight: ${theme.boldFont};
  color: ${theme.black};
  margin: 0 auto;
  margin-bottom: 0.5em;
  @media (${theme.width800}) {
    font-size: 4em;
  }
`;

const ErrorState = styled.div`
  font-size: 1em;
  padding: 1em 1em;
  text-align: center;
  width: 30%;
  margin: 1em auto;
  border-radius: 10px;
  font-weight: ${theme.boldFont};
  background: ${theme.red};
  color: ${theme.white};
  animation: 3s ${fadeIn} forwards;
`;
const DivCounter = styled.div`
  overflow: hidden;
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
  @media (${theme.width800}) {
    width: 90%;
  }
`;
const currentValue = (state: any) => state.counter;
export const CounterTemplate = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(currentValue);
  return (
    <DivCounter>
      <H1TheFirst>Do The Math</H1TheFirst>
      {counterValue.error === "infinityError" && (
        <ErrorState>The result is Infinity</ErrorState>
      )}
      {counterValue.error === "negativeRoot" && (
        <ErrorState>You cannot square negative number</ErrorState>
      )}
      <H1Number>{counterValue.value}</H1Number>

      <DivButtons>
        <ButtonOperation onClick={() => dispatch(mathOperations.increment(1))}>
          Add 1
        </ButtonOperation>
        <ButtonOperation onClick={() => dispatch(mathOperations.increment(2))}>
          Add 2
        </ButtonOperation>
        <ButtonOperation onClick={() => dispatch(mathOperations.pow(2))}>
          Pow 2
        </ButtonOperation>
        <ButtonOperation
          onClick={() => dispatch(mathOperations.pow(counterValue.value))}
        >
          Pow Counter Value
        </ButtonOperation>
        <ButtonOperation onClick={() => dispatch(mathOperations.decrement(1))}>
          Sub 1
        </ButtonOperation>
        <ButtonOperation onClick={() => dispatch(mathOperations.decrement(2))}>
          Sub 2
        </ButtonOperation>
        <ButtonOperation onClick={() => dispatch(mathOperations.div(2))}>
          Div 2
        </ButtonOperation>
        <ButtonOperation onClick={() => dispatch(mathOperations.sqrt())}>
          Square Root
        </ButtonOperation>
      </DivButtons>
    </DivCounter>
  );
};
