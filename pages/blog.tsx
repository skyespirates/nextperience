"use client";

import { useContext } from "react";
import { CountContext } from "../contexts/countContext";
import { usePathname } from "next/navigation";

const Blog = () => {
  const { state, dispatch } = useContext(CountContext);
  const path = usePathname();
  const initial = path.charAt(1).toUpperCase();
  const rest = path.slice(2, path.length);
  const pageName = initial + rest;
  return (
    <div>
      <div>{pageName}</div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "SUB_COUNT" })}>SUB</button>
      <button onClick={() => dispatch({ type: "ADD_COUNT" })}>ADD</button>
    </div>
  );
};

export default Blog;
