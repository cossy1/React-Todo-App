import React, { useState } from 'react'


function TodoForm({addTodo}) {
   let [id, todoId] = useState(0);

    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false,
    })

function handleInputChange(e) {
  setTodo({...todo, task: e.target.value});
}


function handleSubmit(e) {
    e.preventDefault();
    if(todo.task === '')
    alert('Please fill a task')
    if(todo.task.trim && todo.task !== ''){
        addTodo({...todo, id: id});

        // reset the form
        setTodo({...todo, task: ""});

    }
}
    return(
        <div style={{alignContent: 'center', width: "400px", marginLeft: "45px"}}>
            <form onSubmit={handleSubmit}>
            <input type='text' value={todo.task} onChange={handleInputChange}></input>
            <button type='submit' className="btn btn-success btn-lg" style={{marginTop: 0, marginBottom: 7}} 
            onClick={() => todoId(currentState => currentState + 1)}>Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm