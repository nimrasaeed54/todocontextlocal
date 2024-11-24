import React, { useState, useEffect } from 'react';
import Todoform from './components/Todoform';
import Todoitem from './components/Todoitem';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [recentlyDeleted, setRecentlyDeleted] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addtodo = (newTodo) => {
    const updatedTodos = [...todos, { id: Date.now(), ...newTodo }];
    setTodos(updatedTodos);
  };

  const updatetodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const deletetodo = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    setRecentlyDeleted(todoToDelete);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const undoDelete = () => {
    if (recentlyDeleted) {
      setTodos([...todos, recentlyDeleted]);
      setRecentlyDeleted(null);
    }
  };

  const togglecomplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

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

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  const searchedTodos = filteredTodos.filter((todo) =>
    todo.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`min-h-screen py-10 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-6 py-5 border border-gray-300">
        <h1 className="text-3xl font-bold text-center mb-6">
          Manage Your Todos
        </h1>

        {/* Dark Mode Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg transition duration-300 ease-in-out transform ${isDarkMode ? 'bg-yellow-500' : 'bg-white'}  hover:scale-110`}
          >
            {isDarkMode ? (
              <MoonIcon className="h-6 w-6 text-white hover:text-yellow-500" />
            ) : (
              <SunIcon className="h-6 w-6 text-black hover:text-yellow-500" />
            )}
          </button>
        </div>

        {/* Add Todo Form */}
        <Todoform addtodo={addtodo} isDarkMode={isDarkMode} />

        {/* Filter and Search */}
        <div className="flex justify-between my-4">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className={`border rounded-lg px-4 py-2 ${isDarkMode ? 'text-white bg-gray-700' : 'text-black bg-white'} border-gray-400 focus:outline-none`}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <input
            type="text"
            placeholder="Search tasks"
            className={`border rounded-lg px-4 py-2 ${isDarkMode ? 'text-white bg-gray-700' : 'text-black bg-white'} border-gray-400 focus:outline-none`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Undo Delete */}
        {recentlyDeleted && (
          <div className="text-center my-2">
            <button
              onClick={undoDelete}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Undo Delete
            </button>
          </div>
        )}

        {/* Display Todos */}
        {searchedTodos.length === 0 ? (
          <p className="text-center">No Todos yet!</p>
        ) : (
          <div className="grid gap-4">
            {searchedTodos.map((todo) => (
              <div key={todo.id} className="w-full border border-gray-300 rounded-lg p-4">
                <Todoitem
                  todo={todo}
                  togglecomplete={togglecomplete}
                  deletetodo={deletetodo}
                  isDarkMode={isDarkMode} // Pass isDarkMode prop to Todoitem
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
