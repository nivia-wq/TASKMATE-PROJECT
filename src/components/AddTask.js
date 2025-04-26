import "./AddTask.css";
import {useState} from "react";
 export const AddTask = ({tasks,setTasks}) => {

const [currentvalue,setvalue]=useState("");
const[progress,setProgress]=useState(false)

  const setTaskvalue=(event)=>{
    setvalue(event.target.value);
    
  }
  const handlereset=()=>{
    setvalue("")
    setProgress(false)

  }
  const handlesubmit=(event)=>{
    event.preventDefault();
    const task={
      id: Math.floor(Math.random()*10000),
      name: currentvalue,
      completed:Boolean(progress)
    }
    // console.log(task);
    setTasks([...tasks,task])
    handlereset();
    
  };



  return (
    <section  className="addtask">
        <form onSubmit={handlesubmit}>
            <label htmlFor="task">Task Name:</label>
            <input onChange={setTaskvalue}type="text" name="task" id="task" value={currentvalue}></input>
            <select onChange={(event)=>setProgress(event.target.value)} value={progress}>
              <option value="true">Completed</option>
              <option value="false">pending</option>

            </select>
            <span onClick={handlereset} className="reset">Reset</span>
            <button type="submit" placeholder=" Task Name" autoComplete="off">Add Task</button>
            

        </form>
        <p>{currentvalue}</p>
    </section>
  )
}

// export default AddTask;
