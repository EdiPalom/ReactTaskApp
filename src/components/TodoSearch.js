import './css/TodoSearch.css';
import search from './img/search.svg';


function TodoSearch()
{
    return(
        <div className="search-container">
          <img src={search} className="search-icon"></img>
          <input className='todo-search' placeholder="Search task..."/>
        </div>
    );
}

export {TodoSearch};
