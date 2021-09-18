import { useState } from "react"
const AddTask = ({onSubmitProp}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setCheck] = useState(false)

    const submitCheck = (e) =>{
        e.preventDefault()
        if(!text){
            alert("Please enter a task !")
            return
        }
        onSubmitProp({text, day, reminder})

        setText('')
        setDay('')
        setCheck(false) 
    }
    return (
        <form className='add-form' onSubmit={submitCheck}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox"  value={reminder} checked={reminder} onChange={(e) => setCheck(e.currentTarget.checked)}/>
            </div>
            <input type="submit" className="btn btn-block" value="Add Task"/>
        </form>
    )
}

export default AddTask
