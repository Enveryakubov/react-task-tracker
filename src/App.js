import Header from "./components/Header"
import Tasks from "./components/Tasks"
import {useState} from 'react'
import AddTask from "./components/AddTask"

function App() {
  const [visibility, setVisibility] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "Do homework",
            day: "14.03.2021",
            reminder: true,
        },
        {
            id: 2,
            text: "Read a book",
            day: "15.03.2021",
            reminder: true,
        },
        {
            id: 3,
            text: "Call Mike",
            day: "16.03.2021",
            reminder: false,
        }
    ]
)

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
  console.log(newTask)
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
}
const onClick = () => setVisibility(!visibility)
  return (
    <div className="tidy">
      <Header onClick={onClick} visibility = {visibility}/>
      <AddTask onAdd={addTask} visibility = {visibility} />
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <p>No tasks found</p>}
  
    </div>
  );
}

export default App;
