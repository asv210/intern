import React, { useContext } from "react";
import Count from "./Count";
import { counterContext } from "../context/CounterContext";

const Counter = () => {
  const { counter, setCounter } = useContext(counterContext);

  return (
    <div className="bg-sky-500 flex justify-center items-center min-h-[80vh]">
      <button
        onClick={() => setCounter(counter + 1)} // Corrected onClick syntax
        className="bg-indigo-900 text-xl text-white px-12 py-3 rounded-md"
      >
        +
      </button>
      <Count />
      <button
        onClick={() => setCounter(counter - 1)} // Corrected onClick syntax
        className="bg-indigo-900 text-xl text-white px-12 py-3 rounded-md"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
