import React, { useState } from 'react';
import FilterButtons from './components/FilterButtons/FilterButtons.js';

const App = () => {
  const [tasks] = useState([
    { id: 1, text: 'Task 1', done: false, important: true },
    { id: 2, text: 'Task 2', done: false, important: false },
    { id: 3, text: 'Task 3', done: true, important: false },
    { id: 4, text: 'Task 4', done: true, important: false },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleFilterChange = (filter) => {
    switch (filter) {
      case 'Done':
        setFilteredTasks(tasks.filter((task) => task.done));
        break;
      case 'Important':
        setFilteredTasks(tasks.filter((task) => task.important));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  };

  return (
    <div>
      <FilterButtons tasks={tasks} onFilterChange={handleFilterChange} />
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {task.text} {task.done ? '(done)' : ''} {task.important ? '(important)' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
