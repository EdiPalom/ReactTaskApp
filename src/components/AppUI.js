import React from 'react';

import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoContext} from '../TodoContext';

function AppUI ()
{
    const {
        error,
        loading,
        searched_todos,
        complete_todos,
        delete_todo
    } = React.useContext(TodoContext);
    
    return(
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>

          <TodoList>
            {error && <p>Application Error...</p>}
            {loading && <p>Loading Application...</p>}
            {(!loading && !searched_todos.length) && <p>You dont have tasks</p>}
            {
                searched_todos.map(todo=>(
                    <TodoItem key={todo.name}
                              task={todo}
                              on_complete={()=>complete_todos(todo.name)}
                              on_delete={()=>delete_todo(todo.name)}
                    />))
            }
          </TodoList>                

          <CreateTodoButton/>
        </React.Fragment>        
    );
}

export {AppUI};
