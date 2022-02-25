import React from 'react';
import './css/TodoCounter.css';
import {TodoContext} from '../TodoContext';

function TodoCounter(){
    const {total_todos,completed_todos} = React.useContext(TodoContext);
    
    return(
        <h2 className='todo-counter'>Complete Tasks: {completed_todos()} of {total_todos}</h2>        
    );
}

export {TodoCounter};
