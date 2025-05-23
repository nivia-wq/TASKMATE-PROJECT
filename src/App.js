import { useState } from 'react';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";
import './App.css';



function App() {
  const [tasks, setTasks] = useState([
    {id: 5271, name: "Record React Lectures", completed: true}, 
    {id: 7825, name: "Edit React Lectures", completed: false}, 
    {id: 8391, name: "Watch Lectures", completed: false}
]);

  return (
    <div className="App">
      <Header />
      <AddTask tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

export default App;
