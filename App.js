// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

const App = () => {

  const [showAddTask, setshowAddTask] = useState(true)

  const [tasks,setTasks ] = useState([])

//Add Tast
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}


//Delete task
const deleteTask = (id) => {
  // console.log('delete',id)
  setTasks(tasks.filter((task)=> task.id !== id))
}

//Toggle Remainder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? {...task,reminder : !task.reminder} : task))
}

  return (
    <div className="container">
     <Header onAdd = {() => setshowAddTask
      (!showAddTask)} showAdd = {showAddTask} />
     {showAddTask && <AddTask onAdd = {addTask}/>}
     {tasks.length >0 ? <Tasks tasks= {tasks} onDelete = 
     {deleteTask} onToggle = {toggleReminder}/> : 'No Tasks To Show. Add new ones !'}
    </div>
  );
}


export default App;
