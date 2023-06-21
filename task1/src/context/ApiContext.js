import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
export const ApiContext = createContext();
export const ApiContextProvider = ({ props }) => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      //   const response = await fetch(
      //     "https://jsonplaceholder.typicode.com/todos"
      //   );
      //   const data = await response.json();
      //   console.log(data + "from ApiContext");
      //   setTodos(data);
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          //   console.log(response);
          //   setTodos(response.data[0]);
        });
    } catch (error) {
      console.log("err", error.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return <ApiContext.Provider value={todos}>{props}</ApiContext.Provider>;
};
