import React from 'react' 

function Todo({todo, toggleComplete, removeTodo}) {

    function handleCheck() {
        toggleComplete(todo.id)
    }

    function del() {
        removeTodo(todo.id)
    }

    return(
        
        <div style={{display: 'flex', textAlign: 'center', marginBottom: '10px', backgroundColor: 'GrayText'}}>
            
            <div className="d-flex row justify-content-between" style={{width:'400px'}}>
            <input type='checkbox' onClick={handleCheck} style={{marginTop:'10px'}}></input>
            <li style={{color: 'white', textDecoration: todo.completed ? 'line-through' : null, listStyle:'none'}}>{todo.task}</li>
            <button type='button' onClick={del} className="btn btn-primary btn-sm">Delete</button>
            </div>
        </div>
    );

}

export default Todo