import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/CounterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className=" flex-col ">
      <h1 className="text-black font-mono text-5xl flex justify-center mt-[70px]">
        Counter
      </h1>
      <div className="flex justify-center my-10 align-bottom ">
        <button
          className="p-5 hover:bg-[#8b28f5] m-0  bg-blue-500 text-white text-4xl rounded-2xl flex justify-center items-center"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className="mx-5 my-auto text-6xl text-black">{counter}</span>
        <button
          className="p-6 hover:bg-[#8b28f5] m-0  bg-red-600 text-white text-4xl rounded-2xl flex justify-center items-center"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
