import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Eat food", "have Coffee", "Eat dinner"]);

  const [newTask, setNewTasks] = useState("");

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {

    if(newTask!=="")
    {

      setTasks(prev=>[...prev,newTask]);
      setNewTasks("")
    }
  }

  function deleteTask(index) {
      const updatedTasks=tasks.filter((element,i)=>i!==index)
      setTasks(updatedTasks)

  }
  function moveTaskup(index) {

if(index>0){


  
  const updatedTasks=[...tasks];
  
  [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
  setTasks(updatedTasks)
}
  }
  function moveTaskDown(index) {
    // const updatedTasks



    const updatedTasks=[...tasks];
    if(index<updatedTasks.length-1)
    {

      
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
      
      setTasks(updatedTasks)
    }


  }

  return (
    <>
      <div className="font-sans contain w-100 flex h-screen justify-center items-center flex-col bg-blue-300">
        <div>
          <h1 className="text-center text-2xl font-bold p-3">TO-Do-List</h1>
          <div>
            <input
              className="border border-black rounded-lg outline-none p-1 mb-2"
              type="text"
              placeholder="Enter a task..."
              value={newTask}
              onChange={handleInputChange}
            />

            <button
              className="add-button text-white bg-blue-600 p-1 outline-none rounded ml-2"
              onClick={addTask}
            >
              Add
            </button>
          </div>

          <ol>
            {tasks.map((task, index) => {
              return (
                <>
                  <li className="p-1 flex justify-between mb-2" key={index}>
                    <span>{task}</span>
                    <span className="flex
                    gap-1">

                    <button className="rounded-lg pl-1 pr-1 text-white bg-red-500"
                    onClick={()=>deleteTask(index)}
                    
                    >Delete</button>
                    <button className="rounded-lg pl-1 pr-1 text-white "
                    onClick={()=>moveTaskup(index)}
                    
                    >⬆️</button>
                     <button className="rounded-lg  text-white "
                    onClick={()=>moveTaskDown(index)}
                    
                      >🔽️</button>
                    </span>
                  </li>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
