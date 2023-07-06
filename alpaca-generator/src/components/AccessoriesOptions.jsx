
import React from "react";
import styled from 'styled-components';
import {bodyParts} from './AlpacaConstants';
import {Button} from './AvtarViewerStyle.js';

const Contain=styled.div``;
const Heading=styled.h2``;


function AccessoriesOptions(){
    return(
        <Contain>
            <Heading>STYLE</Heading>
            {Object.entries(bodyParts).map((part)=>(Object.entries(part[1]).map(acc=>(<Button >{acc}</Button>))))}
        </Contain>
    );
}

export default AccessoriesOptions;