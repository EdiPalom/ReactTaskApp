import './css/TodoCounter.css';

function TodoCounter({total,completed}){
    return(
            <h2 className='todo-counter'>Complete Tasks: {completed()} of {total}</h2>        
    );
}

export {TodoCounter};
