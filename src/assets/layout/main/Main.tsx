import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Months } from './months/Months';

type TypeData = {
    id: number
}

export const Main = () => {

   
    return (
        <StyledMain>
            <h1>Calendar for <span>2024</span> year</h1>
            <Months/>
        </StyledMain>
    )
}

const StyledMain = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

`
const Title = styled.h1`
    text-align: center;
`