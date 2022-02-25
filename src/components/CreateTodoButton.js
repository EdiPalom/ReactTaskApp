import "./css/CreateTodoButton.css";

function CreateTodoButton()
{
    const onclick_button = ()=>{
        alert('clicked');
    };
    
    return(
        <button
          className='create-button'
          onClick={onclick_button}
        >
          +
        </button>        
    );
}

export  {CreateTodoButton};
