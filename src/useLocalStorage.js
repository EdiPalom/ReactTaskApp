import React from 'react';

function useLocalStorage(item_name,initial_value)
{
    const [loading, set_loading] = React.useState(true);
    const [error, set_error] = React.useState(false);
    
    const [item,set_item] = React.useState(initial_value);

    React.useEffect(()=>{
        setTimeout(()=>{

            try{
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

                set_item(parsed_item);
                set_loading(false);

                // set_error(true);
            }catch{
                set_error(error);
            }
        },2000);
    },[]);
    
    const save_item = (todos)=>
    {
        try{
            const string_todos = JSON.stringify(todos);
            localStorage.setItem(item_name,string_todos);        
            set_item(todos);
        }
        catch{
            set_error(error);
        }
    }

    return {
        item,
        save_item,
        loading,
        error
    }
}


export {useLocalStorage};
