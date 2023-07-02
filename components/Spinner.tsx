import React from "react";

import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#3b82f6",
};

type SpinnerProps = {
  isLoading: boolean;
};

function Spinner({ isLoading }: SpinnerProps) {
  return (
    <ClipLoader
      color="#3b82f6"
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Spinner;
