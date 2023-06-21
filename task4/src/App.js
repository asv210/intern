import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Counter from "./Component/Counter";
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Redux/CounterSlice";
import store from "./Redux/store";
function App() {
  const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
