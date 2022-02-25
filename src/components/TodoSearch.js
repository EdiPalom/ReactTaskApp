import React from 'react';

import './css/TodoSearch.css';
import search from './img/search.svg';
import {TodoContext} from '../TodoContext';

function TodoSearch()
{
    const {search_value, set_search_value} = React.useContext(TodoContext);

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
