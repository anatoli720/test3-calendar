import React from 'react';

type ButtonPropsType = {
    name: string
    onclick: ()=>void
}

export const Button = ({name,onclick}:ButtonPropsType) => {

    return (
        <div>
            <button onClick={onclick}>{name}</button>
        </div>
    )
      
}