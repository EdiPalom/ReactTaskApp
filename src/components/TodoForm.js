import React from 'react';

import {TodoContext} from '../TodoContext';

import './css/TodoForm.css';

function TodoForm()
{
    const [todo_name,set_todo_name] = React.useState('');
    const {save_task,switch_modal} = React.useContext(TodoContext);

    const send_todo =()=>{
        save_task(todo_name);
        set_todo_name('');
    }
    
    const on_change = (msg)=>{
        set_todo_name(msg.target.value);
    }
    
    return(
        <form className="modal__form">
          <label className="form__label">Create Task</label>
          <textarea
            placeholder="Write your task"
            onChange={on_change}
            value={todo_name}
            rows="4"
          />
          
          <div className="modal-button__container">
            <button type="button" className="modal-button modal-button--green"
                    onClick={send_todo}>Send</button>
            
            <button type="button" className="modal-button modal-button--red"
                    onClick={switch_modal}>Cancel</button>
          </div>

        </form>
    );
}

export {TodoForm};
