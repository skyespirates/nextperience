import { createContext, useReducer } from "react";

type StateType = {
  name: string;
  age: number;
  count: number;
};

const aksi = {
  ADD: "ADD_COUNT",
  SUBTRACT: "SUB_COUNT",
};

type ReducerAction = {
  type: "ADD_COUNT" | "SUB_COUNT";
};

const initialState: StateType = {
  name: "Sycho",
  age: 78,
  count: 0,
};

type Reducer<S, A> = (state: S, action: A) => S;

const reducer: Reducer<StateType, ReducerAction> = (state, action) => {
  switch (action.type) {
    case aksi.ADD:
      return { ...state, count: state.count + 1 };
    case aksi.SUBTRACT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const CountContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ReducerAction>;
}>({ state: initialState, dispatch: () => {} });

type ChildrenProp = {
  children: React.ReactNode;
};
export const CountProvider = ({ children }: ChildrenProp) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
