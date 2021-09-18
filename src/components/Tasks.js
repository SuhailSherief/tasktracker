import Task from "./Task"

const Tasks = ({tasksProp, deleteProp, toggleProp}) => {
    return (
        <>
         {tasksProp.map((task) => (
             <Task key={task.id} taskProp={task} deleteTaskProp={deleteProp} toggleRemProp={toggleProp}/>
         ))}   
        </>
    )
}

export default Tasks
