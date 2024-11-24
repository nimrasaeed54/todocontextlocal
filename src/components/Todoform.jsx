import React, { useState } from 'react';

function Todoform({ addtodo, isDarkMode }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addtodo({ task, completed: false });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={`w-full p-3 border rounded-lg ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className={`mt-2 w-full py-2 px-4 rounded-lg ${isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-700 text-white'} hover:bg-blue-600 transition duration-300`}
      >
        Add Todo
      </button>
    </form>
  );
}

export default Todoform;
