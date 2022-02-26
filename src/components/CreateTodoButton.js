import React from 'react';

import "./css/CreateTodoButton.css";

function CreateTodoButton({switch_modal})
{    
    return(
        <button
          className='create-button'
          onClick={switch_modal}
        >
          +
        </button>        
    );
}

export  {CreateTodoButton};
