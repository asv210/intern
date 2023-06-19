import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../context/ApiContext";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.log("err", error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="flex min-h-[80vh] overflow-scroll ">
      {todos.length > 0 &&
        todos.map((cur, i) => (
          <div
            key={i}
            className="py-4 px-5 mx-4 my-3 shadow-black flex-row shadow-md bg-white text-black rounded-md w-1/3"
          >
            <h1 className="text-2xl font-bold">{cur.title}</h1>
            <p>Lorem12</p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
