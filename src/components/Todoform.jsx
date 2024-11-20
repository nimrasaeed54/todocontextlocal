// import React, { useState } from 'react';

// function Todoform({ addtodo }) {
//   const [task, setTask] = useState('');

//   const handleAddTodo = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       addtodo({ task, completed: false });
//       setTask('');
//     }
//   };

//   return (
//     <form onSubmit={handleAddTodo}>
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default Todoform;
import React, { useState } from 'react';

function Todoform({ addtodo }) {
  const [task, setTask] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addtodo({ task, completed: false });
      setTask('');
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="flex space-x-4  p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 px-4 py-2 border-2 text-black border-amber-800 rounded-md  focus:outline-none focus:ring-2 focus:ring-amber-900"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-amber-900 text-white rounded-lg hover: transition duration-75"
      >
        Add
      </button>
    </form>
  );
}

export default Todoform;
