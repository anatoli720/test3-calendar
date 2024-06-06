import React, { useState } from 'react';
import styled from 'styled-components';
import { v1 } from 'uuid';
import { Button } from './elements/Button';

type ArrType = {
    id: string
    text: string
    isDone: boolean
}


export const Modal = () => {
    const [tasks, setTasks] = useState<Array<ArrType>>([])

    const addTask = () =>{
        const newTask = {
            id: v1(),
            text:"rrrrrr",
            isDone: false,
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }

    return (
        <div>
            <h3>To-do list</h3>
            <input type="text" placeholder='Enter the task' /> <Button name={'add'} onclick={addTask}/>
            <div>
                <ul>
                    {tasks.map((todo)=>(
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