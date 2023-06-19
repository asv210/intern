import { useContext } from "react";
import { counterContext } from "../context/CounterContext";
const Count = () => {
  const { counter } = useContext(counterContext);
  return (
    <div>
      <h1 className="text-2xl text-white font-bold space-x-6 mx-4">
        {counter}
      </h1>
    </div>
  );
};

export default Count;
