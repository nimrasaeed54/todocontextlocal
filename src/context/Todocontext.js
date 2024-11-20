// 
import { createContext, useContext } from "react";

export const Todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo message",
      completed: false,
    }
  ],
  addtodo: () => {
    throw new Error("addtodo function is not implemented yet");
  },
  updatetodo: () => {
    throw new Error("updatetodo function is not implemented yet");
  },
  deletetodo: () => {
    throw new Error("deletetodo function is not implemented yet");
  },
  togglecomplete: () => {
    throw new Error("togglecomplete function is not implemented yet");
  }
});

export const useTodo = () => {
  return useContext(Todocontext);
};

export const Todoprovider = Todocontext.Provider;
