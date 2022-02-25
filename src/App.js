//import './App.css';
import React from 'react';

import {TodoCounter} from './components/TodoCounter';
import {TodoSearch} from './components/TodoSearch';
import {TodoList} from './components/TodoList';
import {TodoItem} from './components/TodoItem';
import {CreateTodoButton} from './components/CreateTodoButton';

const todos = [
    {
        name:"cut onions",
        completed:false
    },
    {
        name:"watch react course",
        completed:false
    },
    {
        name:"play guitar",
        completed:false
    },
];

function App(props) {
    return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch/>

          <TodoList>
            {
                todos.map(todo=>(<TodoItem key={todo.name} task={todo}/>))
            }
          </TodoList>

          <CreateTodoButton/>
        </React.Fragment>
  );
}

export default App;
