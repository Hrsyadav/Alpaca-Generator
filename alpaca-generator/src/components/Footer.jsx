
import React from "react";
import styled from 'styled-components';

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

function Footer(){
    return(
        <Contain>
            <Button>Generate Random</Button>
            <Button>Download</Button>
        </Contain>
    );
}

export default Footer;