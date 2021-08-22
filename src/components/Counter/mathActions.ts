import { useDispatch, useSelector } from "react-redux";
export const typesOfOperations = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  DIV: "DIV",
  POW: "POW",
  SQRT: "SQRT",
};

export const mathOperations = {
  increment: (valueOfOperation: number) => {
    return {
      type: typesOfOperations.INCREMENT,
      number: valueOfOperation,
    };
  },
  decrement: (valueOfOperation: number) => ({
    type: typesOfOperations.DECREMENT,
    number: valueOfOperation,
  }),
  pow: (valueOfOperation: number) => ({
    type: typesOfOperations.POW,
    number: valueOfOperation,
  }),

  div: (valueOfOperation: number) => ({
    type: typesOfOperations.DIV,
    number: valueOfOperation,
  }),
  sqrt: () => ({
    type: typesOfOperations.SQRT,
  }),
};
