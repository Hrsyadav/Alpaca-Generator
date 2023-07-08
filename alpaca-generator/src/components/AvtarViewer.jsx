import React, { useEffect, useReducer, useState } from "react";
import {LeftContainer,Img,RightContainer} from './AvtarViewerStyle.js';
import {bodyParts,reducer,initialBody} from './AlpacaConstants';
import Accessories from './Accessories';
import AccessoriesOptions from  './AccessoriesOptions';

function AvtarViewer({randomParts}){
    const [body,dispatch]=useReducer(reducer,initialBody);
    const [currentPart,setCurrentPart]=useState('backgrounds');
    const bodyPartChange=(part)=>{
        setCurrentPart(part);
    };
    const optionChangeHandler=(currentPart,option)=>{
        dispatch({type:'Update',data:{[currentPart]:option}});
    };
    useEffect(()=>{
        dispatch({type:'Update',data:randomParts});
    },[randomParts]);
    return(
        <>
        <LeftContainer id="alpaca">
            {Object.entries(body).map((part,index) => {
                const first=part[0]==='nose'?'':part[0];
                const second=part[0]==='nose'?'nose':bodyParts[part[0]][part[1]];
                return <Img src={"./Media/"+first+"/"+second+".png"} key={index} ></Img>
            })}
        </LeftContainer>
        <RightContainer>
            <Accessories onBodyPartChange={bodyPartChange}></Accessories>
            <AccessoriesOptions currentPart={currentPart} onOptionChange={optionChangeHandler}></AccessoriesOptions>
        </RightContainer>
        </>
    );
}

export default AvtarViewer;