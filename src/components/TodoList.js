import './css/TodoList.css';

function TodoList(props)
{
    return(
        <section className="section-list">
          <ul className="todo-list">
            {props.children}
          </ul>
        </section>
    );
}

export {TodoList};
