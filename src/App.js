//import './App.css';
import React from 'react';
import {AppUI} from './components/AppUI';

// const default_todos = [
//     {
//         name:"cut onions",
//         completed:false
//     },
//     {
//         name:"watch react course",
//         completed:false
//     },
//     {
//         name:"play guitar",
//         completed:false
//     },
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(default_todos));

function useLocalStorage(item_name,initial_value)
{
    const local_storage_item = localStorage.getItem(item_name);

    let parsed_item;

    if(!local_storage_item)
    {
        localStorage.setItem(item_name,JSON.stringify(initial_value));
        parsed_item = initial_value;
    }
    else
    {
        parsed_item = JSON.parse(local_storage_item);
    }

    const [item,set_item] = React.useState(parsed_item);


    const save_item = (todos)=>
    {
        const string_todos = JSON.stringify(todos);
        localStorage.setItem(item_name,string_todos);        
        set_item(todos);
    }

    return [
        item,
        save_item
    ]
}

function App(props) {

    const [todos,save_todos] = useLocalStorage('TODOS_V1',[]);
    const [search_value, set_search_value] = React.useState('');

    let searched_todos = [];


    const completed_todos = ()=>{
        let completed = todos.filter((todo)=>{
            return todo.completed;
        });

        return completed.length;
    };

    const get_search_todos = ()=>{
        return  todos.filter(todo=>{
            const search_rule = new RegExp(search_value,'ig');
            return search_rule.test(todo.name);
        });
    };

    const complete_todos = (name)=>{
        const todo_index = todos.findIndex(todo => todo.name == name );

        // todos[todo_index] = {
        //     text:name,
        //     completed: true
        // };

        const new_todos = [...todos];
        new_todos[todo_index].completed = true;

        save_todos(new_todos);
    };

    const delete_todo = (name)=>{
        const todo_index = todos.findIndex(todo=>todo.name == name);
        const new_todos = [...todos];
        new_todos.splice(todo_index, 1);
        save_todos(new_todos);
    }

    if(!(search_value.length >= 1))
    {
        searched_todos = todos;
    }else{
        searched_todos = get_search_todos();
    }
    
    return (
        <AppUI
          todos={todos.length}
          completed_todos={completed_todos}
          search_value={search_value}
          searched_todos={searched_todos}
          set_search_value={set_search_value}
          complete_todos={complete_todos}
          delete_todo={delete_todo}
        />

    );
}

export default App;
