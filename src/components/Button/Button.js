
import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <div className="text-center mt-3">
            <button type="button" onClick={props.handleClick} className="btn btn-primary">Click for Another Random Joke</button>
            
        </div>
    )
}

export default Button;