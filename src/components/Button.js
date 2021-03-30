

const Button = (props) => {

    return <button onClick={props.onClick} style={{backgroundColor: props.color, margin:"10px"}} className={`btn btn-success btn-lg ${props.taskid && "square"}`}>{props.text}</button> 
}

export default Button
