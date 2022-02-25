import './css/TodoSearch.css';
import search from './img/search.svg';


function TodoSearch()
{
    const on_change = (msg)=>{
        console.log(msg.target.value);
    };
    
    return(
        <div className="search-container">
          <img src={search} className="search-icon"></img>
            <input
              className='todo-search'
              placeholder="Search task..."
              onChange={on_change}
            />
        </div>
    );
}

export {TodoSearch};
