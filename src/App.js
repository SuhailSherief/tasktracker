import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [add, setAdd] = useState(false)

  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true
    },
    {
      id: 3,
      text: "Village head",
      day: "Feb 9th at 9:30pm",
      reminder: false
    }
  ])

  const deleteTask = (e) => {
    setTask(tasks.filter((task) => task.id !== e))
  }

  const onSubmit = (e) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...e } 
    setTask([...tasks, newTask])
  }

  const toggleReminder = (e) => {
    setTask(tasks.map((task) =>
      task.id === e ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header addProp={() => setAdd(!add)} buttonProp={add}/>
      {add && <AddTask onSubmitProp={onSubmit}/>}
      {
        tasks.length > 0 ?
      <Tasks tasksProp={tasks} deleteProp={deleteTask} toggleProp={toggleReminder}/> : <h3>No Tasks remaining</h3>
      }
    </div>
  );
}

export default App;
