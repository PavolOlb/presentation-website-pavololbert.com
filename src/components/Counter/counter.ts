import { Provider, useDispatch, useSelector } from "react-redux";
import { typesOfOperations } from "./mathActions";

export const counter = (
  state = <{ value: number; error: null | "infinityError" | "negativeRoot" }>{
    value: 0,
    error: null,
  },
  action: { type: string; number: number }
) => {
  switch (action.type) {
    case typesOfOperations.INCREMENT:
      return { error: null, value: state.value + action.number };
    case typesOfOperations.DECREMENT:
      return { error: null, value: state.value - action.number };

    case typesOfOperations.POW:
      if (Math.pow(state.value, action.number) === Infinity)
        return { ...state, error: "infinityError" };
      else
        return {
          error: false,
          value: Math.round(Math.pow(state.value, action.number)),
        };
    case typesOfOperations.DIV:
      return { error: null, value: state.value / 2 };
    case typesOfOperations.SQRT:
      if (state.value > 0)
        return { error: null, value: Math.round(Math.sqrt(state.value)) };
      else return { ...state, error: "negativeRoot" };
    default:
      return state;
  }
};
