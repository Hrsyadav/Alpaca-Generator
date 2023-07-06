import React from "react";
import styled from 'styled-components';
import {bodyParts} from './AlpacaConstants';
import {Button} from './AvtarViewerStyle.js';

const Contain=styled.div``;
const Heading=styled.h2``;


function Accessories(){
    return(
        <Contain>
            <Heading>ACCESSORIZE THE ALPACA'S</Heading>
            {Object.entries(bodyParts).map((part,index)=>{return <Button key={index}>{part[0]}</Button>})}
        </Contain>
    );
}

export default Accessories;