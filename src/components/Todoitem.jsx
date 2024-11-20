// import React from 'react';

// function Todoitem({ todo, updatetodo, deletetodo, togglecomplete }) {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         checked={todo.completed}
//         onChange={() => togglecomplete(todo.id)}
//       />
//       <span>{todo.task}</span>
//       <button onClick={() => deletetodo(todo.id)}>Delete</button>
//       <button onClick={() => updatetodo(todo.id, { ...todo, task: 'Updated Task' })}>
//         Edit
//       </button>
//     </div>
//   );
// }

// export default Todoitem;
import React, { useState } from 'react';

function Todoitem({ todo, updatetodo, deletetodo, togglecomplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    // Call the update function with the new task if in edit mode
    if (isEditing && newTask.trim()) {
      updatetodo(todo.id, { ...todo, task: newTask });
    }
    // Toggle the edit mode
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between p-4  rounded-lg shadow-md mb-4">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => togglecomplete(todo.id)}
          className="w-5 h-5 black"
        />
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded-md text-black"
          />
        ) : (
          <span
            className={`flex-1 text-lg ${todo.completed ? 'line-through text-black' : 'text-black'}`}
          >
            {todo.task}
          </span>
        )}
      </div>

      <div className="space-x-2">
        <button
          onClick={() => deletetodo(todo.id)}
          className="px-4 py-2  text-white bg-red-700 rounded-lg hover:bg- transition duration-200"
        >
          Delete
        </button>
        <button
          onClick={handleEdit}
          className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover: transition duration-200"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
