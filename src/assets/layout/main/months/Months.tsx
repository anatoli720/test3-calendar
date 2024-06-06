import React from 'react';
import styled from 'styled-components';
import { Days } from './days/Days';

export const Months = () =>{

    return (
        <div>
            
            <ul>
                <li><h2>Январь</h2> <Days/></li>
                <li><h2>Февраль</h2> <Days/></li>
               
              
            </ul>
        </div>
    )
}
const StyledMonths = styled.div`
    
`