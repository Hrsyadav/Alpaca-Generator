import React, { useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {bodyParts} from './AlpacaConstants';
import {Button} from './AvtarViewerStyle.js';


const Contain=styled.div``;
const Heading=styled.h2``;


function Accessories({onBodyPartChange}){
    const[selected,setSelected]=useState('backgrounds');
    const changeOptions=(part)=>{
        setSelected(part);
        onBodyPartChange(part);
    };
    return(
        <Contain>
            <Heading>ACCESSORIZE THE ALPACA'S</Heading>
            {Object.keys(bodyParts).map((part)=>{return <Button key={part} active={part===selected} onClick={()=> changeOptions(part)}>{part[0].toUpperCase()+part.slice(1)}</Button>})}
        </Contain>
    );
}

Accessories.prototype={
    onBodyPartChange:PropTypes.func
}


export default Accessories;