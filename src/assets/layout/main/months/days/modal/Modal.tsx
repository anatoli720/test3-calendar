import React from 'react';
import styled from 'styled-components';

type ArrType = {
    id: number
    text: string
    isDone: boolean
}

export const Modal = () => {
const todos:ArrType[] = [
    {id:1, text: 'aaaaaaaaa', isDone: true},
    {id:2, text: 'wwwwwwwwww', isDone: true},
    {id:3, text: 'rrrrrrrrrrr', isDone: false},
]
    return (
        <div>
            <h3>To-do list</h3>
            <input type="text" placeholder='Enter the task'/> <button>add</button>
            <div>
                <ul>
                    {todos.map((todo)=>(
                        <li> <input type="checkbox" checked={todo.isDone} /><span>{todo.text}</span> <button>X</button></li>
                    ))}   
                </ul>
            </div>
            <div>
                <button>All</button>
                <button>Completed</button>
                <button>Active</button>
            </div>
        </div>
    )
}

const StyledModal = styled.div`
    width: 300px;
    height: 800px;
    background-color: #a7f1f1;
`