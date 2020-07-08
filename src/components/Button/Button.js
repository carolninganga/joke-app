import React from 'react'

export default function Button(props) {
    return (
        <div className="text-center mt-3">
            <button type="button" onclick={props.handleClick} className="btn btn-primary">Click for Another Random Joke</button>
            
        </div>
    )
}
