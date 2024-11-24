import React from 'react';
import { TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

function Todoitem({ todo, togglecomplete, deletetodo, isDarkMode }) {
  return (
    <div
      className={`flex items-center justify-between p-4 mb-2 rounded-lg border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} 
      ${todo.completed ? 'bg-gray-300 text-gray-500 line-through' : 'bg-white text-black'} 
      hover:shadow-lg hover:border-gray-400 transition-all`}
    >
      <div className="flex-1">
        {/* Todo Text */}
        <div
          className={`cursor-pointer ${todo.completed ? 'text-gray-500 line-through' : 'text-black'}`}
          onClick={() => togglecomplete(todo.id)}
        >
          {todo.task}
        </div>

     
      </div>

      {/* Icons for delete and toggle complete */}
      <div className="flex space-x-2">
        {/* Complete button */}
        <button
          onClick={() => togglecomplete(todo.id)}
          className={`transition duration-300 transform ${todo.completed ? 'text-green-500' : 'text-gray-500'} 
            hover:text-blue-500 hover:scale-105`}
        >
          <CheckCircleIcon className="h-5 w-5" />
        </button>

        {/* Delete button */}
        <button
          onClick={() => deletetodo(todo.id)}
          className="transition duration-300 hover:text-red-500 hover:scale-105"
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
