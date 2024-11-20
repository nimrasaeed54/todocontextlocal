// import React, { useState, useEffect } from 'react';
// import Todoform from './components/Todoform';
// import Todoitem from './components/Todoitem';

// function App() {
//   const [todos, setTodos] = useState([]);

//   // Function to add a new todo
//   const addtodo = (newTodo) => {
//     const updatedTodos = [...todos, { id: Date.now(), ...newTodo }];
//     setTodos(updatedTodos);
//   };

//   // Function to update an existing todo
//   const updatetodo = (id, updatedTodo) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? updatedTodo : todo
//     );
//     setTodos(updatedTodos);
//   };

//   // Function to delete a todo
//   const deletetodo = (id) => {
//     const updatedTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(updatedTodos);
//   };

//   // Function to toggle the completion status of a todo
//   const togglecomplete = (id) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//   };

//   // Load todos from localStorage when the component mounts
//   useEffect(() => {
//     const todosFromStorage = localStorage.getItem('todos');
//     if (todosFromStorage) {
//       try {
//         const parsedTodos = JSON.parse(todosFromStorage);
//         if (Array.isArray(parsedTodos)) {
//           setTodos(parsedTodos);
//         } else {
//           console.error('Invalid data format in localStorage');
//         }
//       } catch (error) {
//         console.error('Error parsing localStorage data:', error);
//       }
//     }
//   }, []);

//   // Save todos to localStorage whenever todos change
//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <div className="bg-blue-900 min-h-screen py-10">
//       <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-6 py-5 bg-blue-800 text-white">
//         <h1 className="text-3xl font-semibold text-center mb-6">Manage Your Todos</h1>

//         <Todoform addtodo={addtodo} />

//         {todos.length === 0 ? (
//           <p className="text-center text-white">No Todos yet!</p>
//         ) : (
//           <div className="grid gap-4">
//             {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <Todoitem
//                   todo={todo}
//                   updatetodo={updatetodo}
//                   deletetodo={deletetodo}
//                   togglecomplete={togglecomplete}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import Todoform from './components/Todoform';
import Todoitem from './components/Todoitem';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addtodo = (newTodo) => {
    const updatedTodos = [...todos, { id: Date.now(), ...newTodo }];
    setTodos(updatedTodos);
  };

  // Function to update an existing todo
  const updatetodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  // Function to delete a todo
  const deletetodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Function to toggle the completion status of a todo
  const togglecomplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Load todos from localStorage when the component mounts
  useEffect(() => {
    const todosFromStorage = localStorage.getItem('todos');
    if (todosFromStorage) {
      try {
        const parsedTodos = JSON.parse(todosFromStorage);
        if (Array.isArray(parsedTodos)) {
          setTodos(parsedTodos);
        } else {
          console.error('Invalid data format in localStorage');
        }
      } catch (error) {
        console.error('Error parsing localStorage data:', error);
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen py-10">
      <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-6 py-5 text-amber-900">
        <h1 className="text-3xl font-bold text-center mb-6">Manage Your Todos</h1>

        <Todoform addtodo={addtodo} />

        {todos.length === 0 ? (
          <p className="text-center text-black">No Todos yet!</p>
        ) : (
          <div className="grid gap-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitem
                  todo={todo}
                  updatetodo={updatetodo}
                  deletetodo={deletetodo}
                  togglecomplete={togglecomplete}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
