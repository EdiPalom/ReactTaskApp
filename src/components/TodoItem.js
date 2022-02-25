import './css/TodoItem.css';
import check from './img/check.svg';
import double_check from './img/double-check.svg';

function TodoItem(props)
{
    const on_complete = ()=>{
        alert('task completed');
    };

    const on_delete = ()=>{
        alert('task deleted');
    }
    
    const {task} = props;
    
    return(
        <li className="todo-item">
          <img
            className={`icon-check ${task.completed && 'icon-check--active'}`}
            src={task.completed ? double_check : check}
            onClick={on_complete}
          ></img>
            <p className={`text ${task.completed && 'text--completed'}`}>
            {task.name}
          </p>
          <span
            className="close"
            onClick={on_delete}
          >
            x
          </span>
        </li>
    );
}

export {TodoItem};
