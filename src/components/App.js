import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import { TaskContextProvider } from '../context/TaskContext';

function App() {
  return (
      <div className="App">
        <TaskContextProvider>
          <h1>°❀⋆. Mardan's to-do list ೃ࿔*:･</h1>
          <AddTaskForm />
          <TaskList />
        </TaskContextProvider>
      </div>
  );
}
export default App;