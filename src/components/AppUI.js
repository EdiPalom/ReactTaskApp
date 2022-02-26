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
import {TodoTitle} from './TodoTitle';

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
          <TodoTitle/>
          
          <TodoList>
            {error && <TodoError/>}
            {loading && <TodoLoading/>}
            {(!loading && !searched_todos.length) && <TodoEmpty/>}

            {!error && !loading && !!searched_todos.length && 
             <section>
                 <TodoCounter/>
                 <TodoSearch/>

               {
                   searched_todos.map(todo=>(
                       <TodoItem key={todo.name}
                                 task={todo}
                                 on_complete={()=>complete_todos(todo.name)}
                                 on_delete={()=>delete_todo(todo.name)}
                       />))

               
               }

             </section>
            }

            {
               !error &&
                <CreateTodoButton switch_modal={switch_modal}/>                  
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
