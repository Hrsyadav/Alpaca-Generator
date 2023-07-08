import styled from 'styled-components';

export const LeftContainer=styled.div`
    flex:2 1 40%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
`;

export const Img=styled.img`
    width:500px;
    height:500px;
    position:absolute;
`;

export const RightContainer=styled.div`
    
    display:flex;
    flex-direction:column;
    row-gap:10%;
    justify-content:center;
    justify-content:start;
    overflow:auto;
    flex:1 1 40%;
`;

export const Button=styled.button`
    &:hover{
        cursor:pointer;
        background:#0077be;
        color:#fff;
    }
    font-weight:800;
    min-width:6em;    
    padding:0.6em 1em;
    border-radius:2em;
    background:#fff;
    border:1px solid skyblue;
    color:skyblue;
    margin-inline:0.4em;
    margin-block:0.4em;
    ${props=>(props.active)?'background:#0077be;color:#fff;':''}
    min-height:3.5em;
`;