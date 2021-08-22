import { ListOfTypes } from "./ToDoRight";
import { theme } from "../../theme";
import { todoTheme } from "./todolist.theme";
import React from "react";
import styled from "styled-components";
const DivWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const FormEdit = styled.form<{ isEdited: boolean }>`
  width: 100%;
  height: 1em;
  display: ${(p) => (p.isEdited === true ? "flex" : "none")};
  align-items: center;

  input {
    color: ${todoTheme.taskInputColor};
    font-weight: ${theme.thickerFont1};
    font-size: 1em;
    width: 100%;
    height: 1em;
    border: none;
    :focus {
      outline: none;
      color: ${theme.black};
    }
  }
`;
const DivTasks = styled.div<{ isEdited: boolean }>`
  display: flex;
  background: ${theme.white};
  justify-content: left;
  align-items: center;
  padding: 0.2em 1em;
  font-weight: ${theme.thickerFont1};
  color: ${todoTheme.taskFontColor};
  border-bottom: 1px solid ${todoTheme.lightTaskBorder};
  padding-left: 0.5em;
  p {
    display: none;
  }
  :hover {
    justify-content: space-between;
    p {
      padding: 0;
      margin: 0;
      display: ${(p) => (p.isEdited === true ? "none" : "inline")};
      color: ${todoTheme.taskDeleteRed};
      font-weight: ${theme.tinyFont};
      cursor: default;
      font-size: 0.7em;
    }
  }
`;
const PStyled = styled.p`
  margin: "0";
  padding: "0";
`;
const CheckboxTask = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  height: 30px;
  min-width: 30px;
  background: ${theme.white};
  border-radius: 50%;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${todoTheme.checkBoxBorder};
  margin: 0;
  :after {
    margin-right: 0.2em;
    color: ${todoTheme.checkBoxAfterTask};
    content: "✓";
    font-weight: 900;
    font-size: 1.5em;
    display: none;
  }
  :checked {
    border-color: ${todoTheme.checkBoxChecked};
  }
  :checked:after {
    display: block;
  }
`;

const DivB = styled.div<{ isDone: boolean }>`
  text-align: left;
  padding: 0 0.5em;
  word-wrap: break-word;
  min-width: 80%;
  text-decoration: ${(p) => (p.isDone === true ? "line-through" : "none")};
  color: ${(p) => (p.isDone === true ? "grey" : "inherit")};
`;

const SpanWidth = styled.span<{ isEdited: boolean }>`
  max-width: 100%;
  word-break: break-all;
  display: ${(p) => (p.isEdited === true ? "none" : "inline")};
`;
type Props = {
  copyList: ListOfTypes[];
  checking: (
    thistask: ListOfTypes,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  removing: (thistask: ListOfTypes) => void;
  updating: (
    thistask: ListOfTypes,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  editing: (task: ListOfTypes, isEdited: boolean) => void;
};
export const TaskList = (props: Props) => {
  return (
    <div>
      {props.copyList.map((thistask) => (
        <DivTasks key={thistask.id} isEdited={thistask.editing}>
          <DivWrapper>
            <CheckboxTask
              type="checkbox"
              checked={thistask.isChecked}
              onChange={(event) => props.checking(thistask, event)}
            />
            <DivB isDone={thistask.isChecked}>
              <SpanWidth
                onDoubleClick={() => {
                  props.editing(thistask, true);
                }}
                isEdited={thistask.editing}
              >
                {thistask.task}
              </SpanWidth>
            </DivB>
          </DivWrapper>
          <FormEdit
            onSubmit={(event) => {
              event.preventDefault();

              props.editing(thistask, false);
            }}
            isEdited={thistask.editing}
          >
            <input
              type="text"
              value={thistask.task}
              onBlur={() => props.editing(thistask, false)}
              onChange={(event) => {
                event.preventDefault();

                props.updating(thistask, event);
              }}
            />
          </FormEdit>
          <PStyled onClick={() => props.removing(thistask)}>✕</PStyled>
        </DivTasks>
      ))}
    </div>
  );
};
