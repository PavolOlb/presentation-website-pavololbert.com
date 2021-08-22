import { theme } from "../../theme";
import { todoTheme } from "./todolist.theme";
import React from "react";
import styled from "styled-components";

type Props = {
  valueCheck: boolean;
  clicking: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitting: () => void;
  inputDo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theValue: string;
};
const DivA = styled.div`
  box-shadow: inset 0 -2px 1px ${todoTheme.shadowInput};
  -webkit-box-shadow: inset 0 -2px 1px ${todoTheme.shadowInput};
  border-bottom: 2px solid ${todoTheme.borderInput};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckboxToggle = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  height: 30px;
  width: 30px;
  background: ${theme.primaryBackground};
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  :after {
    transform: rotate(90deg);
    margin-right: 0.2em;
    color: ${todoTheme.checkBoxAfter};
    content: "❯";
    font-weight: ${theme.boldFont};
    font-size: 1.5em;
  }
  :checked:after {
    color: ${todoTheme.checkboxCheckedAfter};
  }
`;

const DivCenter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`;
const InPutToDo = styled.input`
  border: none;
  background: ${theme.primaryBackground};
  width: 100%;
  padding: 0;
  padding: 16px 16px 16px 10px;
  font-weight: ${theme.tinyFont};
  font-size: 0.8em;

  ::placeholder {
    color: ${todoTheme.placeholderColor};
    opacity: 0.2;
    font-weight: ${theme.tinyFont};
  }
  :focus {
    outline: none;
    color: ${theme.black};
  }
`;

export const InputPart = (props: Props) => {
  return (
    <DivA>
      <DivCenter>
        <CheckboxToggle
          type="checkbox"
          onChange={props.clicking}
          checked={props.valueCheck}
        />
      </DivCenter>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          props.submitting();
        }}
      >
        <InPutToDo
          placeholder="What needs to be done?"
          autoFocus
          onChange={props.inputDo}
          value={props.theValue}
        ></InPutToDo>
      </form>
    </DivA>
  );
};
