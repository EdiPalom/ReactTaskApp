import React from 'react';

import notes from './img/notes.svg';
import add from './img/add.svg';
import './css/TodoEmpty.css';

function TodoEmpty()
{
    return(
        <div className='empty'>
            <img width='200px' height='200px' src={notes}></img>
            <p>Your tasks list is empty, use</p>
            <img width='30px' height='30px' src={add}></img>
            <p>to add a new task.</p>
        </div>
    );
}

export {TodoEmpty};
