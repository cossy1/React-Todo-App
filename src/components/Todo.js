import React from 'react' 

function Todo({removeTodo, toggleComplete, todo}) {

    function handleCheck() {
        toggleComplete(todo.id)
    }

    function del() {
        removeTodo(todo.id)
    }

    return(
        
        <div style={{ textAlign: 'center', marginBottom: '10px', backgroundColor: 'GrayText'}}>
            
            <div className="d-flex row justify-content-between" style={{width:'398px'}}>
            <input type='checkbox' onClick={handleCheck} style={{marginTop:'10px'}}></input>
            <li style={{color: todo.completed ? 'black' : 'white', textDecoration: todo.completed ? 'line-through' : null, listStyle:'none'}}>{todo.task}</li>
            <button type='button' onClick={del} className="btn btn-primary btn-sm">Delete</button>
            </div>
        </div>
    );

}

export default Todo