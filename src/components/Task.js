import { FaTimes } from 'react-icons/fa'

const Task = ({taskProp, deleteTaskProp, toggleRemProp}) => {
    return (
        <div className={`task ${taskProp.reminder === true ? 'reminder' : ''}`} onDoubleClick={() => toggleRemProp(taskProp.id)}>
            <h3>{taskProp.text}<FaTimes style={{color: 'red'}} onClick={ () => deleteTaskProp(taskProp.id)}/></h3>
            <p>{taskProp.day}</p>
        </div>
    )
}

export default Task
