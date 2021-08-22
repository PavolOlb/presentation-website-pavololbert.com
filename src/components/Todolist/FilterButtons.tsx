import { theme } from "../../theme";
import { todoTheme } from "./todolist.theme";
import React from "react";
import styled from "styled-components";

const DivFlex = styled.div<{ displaying: Number }>`
  padding: 0.7em 0;
  display: ${(p) => (p.displaying < 1 ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  height: 1em;
  box-shadow: 0 1px 1px ${todoTheme.transparentBlack},
    0 8px 0 -3px ${todoTheme.shadowWhite},
    0 9px 1px -3px ${todoTheme.transparentBlack},
    0 16px 0 -6px ${todoTheme.shadowWhite},
    0 17px 2px -6px ${todoTheme.transparentBlack};
`;

const ButtonFilter = styled.button<{ numberOfDone: Number }>`
  margin: 0;
  padding: 0;
  border: none;
  display: ${(p) => (p.numberOfDone < 1 ? "none" : "inline")};
  background: ${theme.white};
  padding: 0.3em 1em;
  border-radius: 5%;
  cursor: pointer;
  color: ${theme.grey};
  :not(:last-child) {
    margin-right: 0.2em;
  }

  :hover:not(:checked) {
    outline: 1px solid ${todoTheme.buttonFilterCheck};
  }
`;
const SpanItems = styled.span`
  color: ${theme.grey};
  font-weight: ${theme.tinyFont};
  font-size: 0.5em;
  margin-left: 0.5em;
`;
const DivButtons = styled.div<{ numberOfDone?: number }>`
  height: 1.6em;
  min-width: ${(p) => (p.numberOfDone! < 1 ? "55px" : "0")};
`;
export const FilterButtons = (props: any) => {
  const itemState = () => {
    if (props.numberoftasks === 1) {
      return "item";
    } else {
      return "items";
    }
  };
  return (
    <DivFlex displaying={props.displayClear}>
      <SpanItems>
        {props.numberOfTasks} {itemState()} left
      </SpanItems>
      <DivButtons>
        <ButtonFilter
          value="All"
          onClick={props.clicking}
          className={props.selected === "All" ? "selected" : ""}
          numberOfDone={2}
        >
          All
        </ButtonFilter>
        <ButtonFilter
          value="false"
          onClick={props.clicking}
          className={props.selected === false ? "selected" : ""}
          numberOfDone={2}
        >
          Active
        </ButtonFilter>
        <ButtonFilter
          value="true"
          onClick={props.clicking}
          className={props.selected === true ? "selected" : ""}
          numberOfDone={2}
        >
          Completed
        </ButtonFilter>
      </DivButtons>
      <DivButtons numberOfDone={props.numberOfDone}>
        <ButtonFilter
          onClick={props.clearCompleted}
          numberOfDone={props.numberOfDone}
        >
          Clear{" "}
        </ButtonFilter>
      </DivButtons>
    </DivFlex>
  );
};

//||
