import React, { useState } from 'react'

function ToDoList() {

    const [tasks, setTasks] = useState(["Solve a Problem" , "Listen music" , "Cook some food"]);

    const [newTask , setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    };

    function addTask(){

        if(newTask.trim() !== ""){
        setTasks([...tasks , newTask]);
        setNewTask("")
        }

    };

    function deleteTask(index){
        const updaeTasks =tasks.filter((_ , i) => i !== index);
        setTasks(updaeTasks)
    };

    function moveTaksUp(index){
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index - 1]] = 
            [updatedTasks[index - 1] , updatedTasks[index]] ;
            setTasks(updatedTasks)
        }
    };

    function moveTaksUDown(index){
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index + 1]] = 
            [updatedTasks[index + 1] , updatedTasks[index]] ;
            setTasks(updatedTasks) ;
        }
    }

  return (
    <div className='to-do-list'>
      <h1>To Do List</h1>
      <div>
        <input type='text' id='' placeholder='Enter a task...' value={newTask} onChange={handleInputChange}/>
        <button className='add-button'onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task , index) => 
        <li key={index}> 
            <span className='text'>{task}</span>
            <button className='delete-button' onClick={()=> deleteTask(index)}>Delete</button>
            <button className='move-button' onClick={()=> moveTaksUp(index)}>👆</button>
            <button className='move-button' onClick={()=> moveTaksUDown(index)}>👇</button>
        </li>
    )}
      </ol>
    </div>
  )
}

export default ToDoList
