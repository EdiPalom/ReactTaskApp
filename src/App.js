//import './App.css';
import React from 'react';
import {AppUI} from './components/AppUI';
import {TodoProvider} from './TodoContext';


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

function App(props) {



    // React.useEffect(()=>{
    //     console.log('use effect');
    // },[total_todos]);

    return (
        <TodoProvider>
          <AppUI/>
        </TodoProvider>
    );
}

export default App;
