"use client";

import type { NextPage } from "next";

import { useContext } from "react";
import { CountContext } from "../contexts/countContext";

const Home: NextPage = () => {
  const { state, dispatch } = useContext(CountContext);
  return (
    <div>
      <div>{state.name}</div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "SUB_COUNT" })}>SUB</button>
      <button onClick={() => dispatch({ type: "ADD_COUNT" })}>ADD</button>
    </div>
  );
};

export default Home;
