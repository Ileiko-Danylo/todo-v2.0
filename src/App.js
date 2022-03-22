import './App.css';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <>
      <h2>ToDo App</h2>
      <div className="container">
        <ToDoList />
      </div>
    </>
  );
}

export default App;
