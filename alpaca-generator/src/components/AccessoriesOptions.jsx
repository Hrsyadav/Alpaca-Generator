
import React, { useState } from "react";
import styled from 'styled-components';
import {bodyParts,initialBody} from './AlpacaConstants';
import {Button} from './AvtarViewerStyle.js';

const Contain=styled.div``;
const Heading=styled.h2``;


function AccessoriesOptions({currentPart,onOptionChange}){
    const [selected,setSelection]=useState(initialBody);
    const changeOption=(option)=>{
        setSelection({...selected,...{[currentPart]:option}});
        onOptionChange(currentPart,option);
    };
    return(
        <Contain>
            <Heading>STYLE</Heading>
            {Object.keys(bodyParts[currentPart]).map((option,index)=>(<Button active={option===selected[currentPart]} onClick={()=>changeOption(option)} key={index}>{option[0].toUpperCase()+option.slice(1)}</Button>))}
        </Contain>
    );
}

export default AccessoriesOptions;