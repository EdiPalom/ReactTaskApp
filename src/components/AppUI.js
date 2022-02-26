import React from 'react';

import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoContext} from '../TodoContext';
import {Modal} from './Modal.js';
import {TodoForm} from './TodoForm';
import {TodoLoading} from './TodoLoading';
import {TodoError} from './TodoError';
import {TodoEmpty} from './TodoEmpty';

function AppUI ()
{
    const {
        error,
        loading,
        searched_todos,
        complete_todos,
        delete_todo,
        open_modal,
        switch_modal,
    } = React.useContext(TodoContext);
    
    return(
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>

          <TodoList>
            {error && <TodoError/>}
            {loading && <TodoLoading/>}
            {(!loading && !searched_todos.length) && <TodoEmpty/>}

            {!error && 
             <section>
               {
                   searched_todos.map(todo=>(
                       <TodoItem key={todo.name}
                                 task={todo}
                                 on_complete={()=>complete_todos(todo.name)}
                                 on_delete={()=>delete_todo(todo.name)}
                       />))

               
               }
               <CreateTodoButton switch_modal={switch_modal}/>
             </section>
            }
          </TodoList>                

          {open_modal &&(
              <Modal>
                <TodoForm/>
              </Modal>              
          )}

        </React.Fragment>        
    );
}

export {AppUI};
