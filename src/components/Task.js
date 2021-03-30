import React from 'react'
import Button from "./Button"

function Task(props) {


    return (
        <div className={`task ${props.task.reminder ? "remind": ""}`} onDoubleClick={() => props.onToggle(props.task.id)}>
            <div>
                <h3>{props.task.text}</h3>
                <p>{props.task.day}</p>
            </div>
            <Button text="X" color="#ed1847" onClick= {() => props.onDelete(props.task.id) } taskid={props.task.id}/>    
        </div>
    )
}
 
export default Task
