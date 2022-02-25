import React from 'react';
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();
const {Provider,Consumer} = TodoContext;

function TodoProvider(props){

    const {item:todos,save_item:save_todos,loading,error} = useLocalStorage('TODOS_V1',[]);
    const [search_value, set_search_value] = React.useState('');

    let searched_todos = [];
    const total_todos = todos.length;

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
    
    return(
        <Provider value={{
            loading,
            error,
            total_todos,
            completed_todos,
            search_value,
            searched_todos,
            set_search_value,
            complete_todos,
            delete_todo,            
        }}>
          {props.children}
        </Provider>
    )
}

export{TodoContext,TodoProvider};
