import React from 'react';

import './css/TodoSearch.css';
import search from './img/search.svg';


function TodoSearch({search_value, set_search_value})
{   
    const on_change = (msg)=>{
        set_search_value(msg.target.value);
    };
    
    return(
        <div className="search-container">
          <img src={search} className="search-icon"></img>
            <input
              className='todo-search'
              placeholder="Search task..."
              onChange={on_change}
              value={search_value}
            />
        </div>
    );
}

export {TodoSearch};
