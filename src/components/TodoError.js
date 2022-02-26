import React from 'react';
import './css/TodoError.css';
import error from './img/error.svg';

function TodoError()
{
    return (
        <section className="error-container">
          <img className="error__img" width="200px" height="200px" src={error}></img>
          <p className="message">Sorry,<br/> We got a problem.</p>
        </section>
    );
}

export {TodoError};
