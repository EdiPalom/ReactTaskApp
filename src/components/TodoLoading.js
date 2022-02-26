import './css/TodoLoading.css';

function TodoLoading()
{
    return(
        <div className="loading">
          <div className="lds-ripple"><div></div><div></div></div>
        </div>
        
    );
}

export {TodoLoading};
