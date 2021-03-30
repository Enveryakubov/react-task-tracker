import {useState} from "react"

const AddTask = (props) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert("Please add text")
            return
        }
        props.onAdd({text, day, reminder})
        setText("")
        setDay("")
        setReminder(false)
    }
    return (
       <form onSubmit={onSubmit} className={props.visibility ? "": "disappear"}>
           <div>
               <label>Задание</label>
               <input type="text" placeholder="Введите задание" value={text} onChange={(e) => setText(e.target.value)}/>
           </div>
           <div>
               <label>День</label>
               <input type="text" placeholder="Введите дату" value={day} onChange={(e) => setDay(e.target.value)}/>
           </div>
           <div>
               <label>Напомнить</label>
               <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
           </div>
           <input type="submit" className="btn btn-warning" value="Сохранить задание"/>
       </form>
    )
}

export default AddTask


