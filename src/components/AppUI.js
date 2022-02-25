import React from 'react';

import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';

function AppUI ({
    total_todos,
    completed_todos,
    search_value,
    searched_todos,
    set_search_value,
    complete_todos,
    delete_todo})
{
    return(
        <React.Fragment>
          <TodoCounter
            total={total_todos}
            completed={completed_todos}
          />
          
          <TodoSearch
            search_value = {search_value}
            set_search_value = {set_search_value}
           />

          <TodoList>
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
