import { FilterButtons } from "./FilterButtons";
import { InputPart } from "./InputPart";
import { TaskList } from "./TaskList";
import { link } from "fs";
import { theme } from "../../theme";
import { todoTheme } from "./todolist.theme";
import React from "react";
import styled from "styled-components";

//Styled components

const DivRight = styled.div`
  width: 80%;
  text-align: center;

  h1 {
    font-size: 7em;
    font-weight: ${theme.tinyFont};
    margin: 0;
    color: ${theme.lightRed};
    margin-bottom: 0.2em;
  }
  @media (${theme.width1000}) {
    width: 90%;
  }
`;

const DivToDo = styled.div`
  font-size: 2em;
  background: ${theme.white};
  width: 50%;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 ${todoTheme.transparentBlack},
    0 25px 50px 0 ${todoTheme.invisibleBlack};
  @media (${theme.width1000}) {
    width: 100%;
  }
`;

type MyState = {
  toggleOption: boolean;
  filterOption: "All" | boolean;
  toDo: string;
  list: ListOfTypes[];
  listCopy: ListOfTypes[];
};

export type ListOfTypes = {
  task: string;
  isChecked: boolean;
  editing: boolean;
  id: number;
};
type MyProps = {};

export class ToDoRight extends React.Component<MyProps, MyState> {
  state: MyState = {
    toggleOption: false,
    filterOption: "All",
    toDo: "",
    list: [],
    listCopy: [],
  };

  removeTask = (thistask: ListOfTypes) => {
    this.setState((state) => {
      return {
        list: state.list.filter((item) => item !== thistask),
      };
    });

    this.filtering(this.state.filterOption);
  };

  filterCompleted = () => {
    let filteredTasks;
    this.setState((state) => {
      return {
        list: state.list.filter((item) => item.isChecked === false),
      };
    });
    this.setState((state) => {
      return {
        listCopy: state.list,
      };
    });
    this.setState((state) => {
      return {
        toggleOption: false,
      };
    });
    this.filtering(this.state.filterOption);
  };
  filtering = (boolValue: "All" | boolean) => {
    if (this.state.filterOption === "All") {
      this.setState((state) => {
        return {
          listCopy: state.list,
        };
      });
    } else {
      this.setState((state) => {
        return {
          listCopy: state.list.filter((item) => item.isChecked === boolValue),
        };
      });
    }
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ toDo: event.target.value });
  };
  clearToggle = () => {
    this.setState((state) => {
      return {
        toggleOption: false,
      };
    });
  };

  handleSubmit = () => {
    let listCopy;
    let boolValue: "All" | boolean;
    let stringValue = this.state.filterOption;
    if (stringValue === "All") {
      boolValue = /true/i.test(stringValue);
    } else boolValue = false;

    const newTask = {
      task: this.state.toDo,
      isChecked: false,
      editing: false,

      id: Math.floor(Math.random() * 1000000),
    };

    if (this.state.toDo.length === 0) {
      return;
    } else {
      this.setState((state) => {
        return {
          list: [newTask, ...state.list],
        };
      });

      this.filtering(boolValue);

      this.setState({ toDo: "" });
      this.clearToggle();
    }
  };

  setEditTask = (task: ListOfTypes, isEdited: boolean) => {
    var editing = isEdited;
    this.setState((state) => {
      return {
        listCopy: state.listCopy.map((item) =>
          item === task ? { ...item, editing } : item
        ),
      };
    });
  };
  editTask = (
    thistask: ListOfTypes,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var task = event.target.value;
    this.setState((state) => {
      return {
        listCopy: state.listCopy.map((item) =>
          item === thistask ? { ...item, task } : item
        ),
      };
    });
  };
  handleBtns = (e: React.ChangeEvent<HTMLInputElement>) => {
    let listCopy;
    let stringValue = e.target.value;
    let boolValue = /true/i.test(stringValue);

    if (e.target.value === "All") {
      listCopy = this.state.list;
      this.setState(() => {
        return {
          filterOption: "All",
        };
      });
    } else {
      listCopy = this.state.list.filter((item) => item.isChecked === boolValue);
      this.setState((state) => {
        return {
          filterOption: boolValue,
        };
      });
    }

    this.setState((state) => {
      return {
        listCopy: listCopy,
      };
    });
  };

  handleFilter = () => {
    let listCopy;
    listCopy = this.state.list;
    this.setState((state) => {
      return {
        listCopy: state.list,
      };
    });
  };
  handleCheck = (
    thistask: ListOfTypes,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var isChecked = event.target.checked;

    let boolValue: "All" | boolean;
    let stringValue = this.state.filterOption;
    if (stringValue === "All") {
      boolValue = /true/i.test(stringValue);
    } else boolValue = false;

    this.setState((state) => {
      return {
        list: state.list.map((item) =>
          item === thistask ? { ...item, isChecked } : item
        ),
      };
    });
    this.setState((state) => {
      return {
        listCopy: state.listCopy.map((item) =>
          item === thistask ? { ...item, isChecked } : item
        ),
      };
    });

    if (event.target.checked === false) {
      this.clearToggle();
    }

    this.setState((state) => {
      return {
        listCopy: state.listCopy.map((item) =>
          item === thistask ? { ...item, isChecked } : item
        ),
      };
    });

    this.setState((state) => {
      if (state.list.every((item) => item.isChecked === true))
        return {
          toggleOption: true,
        };
      else {
        return {
          toggleOption: false,
        };
      }
    });

    this.filtering(boolValue);
  };

  handleLabel = (e: React.ChangeEvent<HTMLInputElement>) => {
    let isChecked = e.target.checked;

    let boolValue;
    let stringValue = this.state.filterOption;
    if (stringValue === "All") {
      boolValue = /true/i.test(stringValue);
    } else boolValue = false;
    this.setState((state) => {
      return {
        toggleOption: isChecked,
      };
    });
    this.setState((state) => {
      return {
        list: state.list.map((item) =>
          item === item ? { ...item, isChecked } : item
        ),
      };
    });

    this.filtering(boolValue);
  };

  render() {
    return (
      <DivRight>
        <h1>todos</h1>

        <DivToDo>
          <InputPart
            valueCheck={this.state.toggleOption}
            clicking={this.handleLabel}
            submitting={this.handleSubmit}
            inputDo={this.handleChange}
            theValue={this.state.toDo}
          />
          <TaskList
            copyList={this.state.listCopy}
            checking={this.handleCheck}
            removing={this.removeTask}
            updating={this.editTask}
            editing={this.setEditTask}
          />
          <FilterButtons
            clicking={this.handleBtns}
            numberOfTasks={
              this.state.list.filter((item) => item.isChecked === false).length
            }
            numberOfDone={
              this.state.list.filter((item) => item.isChecked === true).length
            }
            displayClear={this.state.list.length}
            clearCompleted={this.filterCompleted}
            selected={this.state.filterOption}
          />
        </DivToDo>
      </DivRight>
    );
  }
}
