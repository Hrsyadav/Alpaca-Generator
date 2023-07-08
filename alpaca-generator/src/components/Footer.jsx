
import React from "react";
import styled from 'styled-components';
import {bodyParts,initialBody} from './AlpacaConstants';

const Contain=styled.div`
    display:flex;
    justify-content:center;
`;

export const Button=styled.button`
    &:hover{
        cursor:pointer;
        background:#0077be;
        color:#fff;
    }
    min-height:3.5em;
    min-width:6em;    
    padding:0.6em 1em;
    background:#fff;
    border:1px solid black;
    margin-inline:1em;
    font-weight:800;
    margin-block:0.5em;
`;

function Footer({onGenerateRandomAlpaca,onDownloadImage}){
    let randomParts={...initialBody};
    const GenerateRandomAlpaca=()=>{
        Object.entries(bodyParts).map((part)=>{
            let Keys=Object.keys(part[1]);
            let randomKey=Keys[Math.floor(Math.random()*Keys.length)];
            randomParts[part[0]]=randomKey;
            return false;
        })
        onGenerateRandomAlpaca(randomParts);
    }
    const downloadImage=()=>{
        onDownloadImage();
    }
    return(
        <Contain>
            <Button onClick={()=>GenerateRandomAlpaca()}>Generate Random</Button>
            <Button onClick={downloadImage}> Download</Button>
        </Contain>
    );
}

export default Footer;