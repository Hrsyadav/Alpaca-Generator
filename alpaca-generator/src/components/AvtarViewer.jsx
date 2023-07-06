import React from "react";
import {LeftContainer,Img,RightContainer} from './AvtarViewerStyle.js';
import {bodyParts} from './AlpacaConstants';
import Accessories from './Accessories';
import AccessoriesOptions from  './AccessoriesOptions';

function AvtarViewer(){
    return(
        <>
        <LeftContainer>
            <Img src="./Media/backgrounds/blue50.png" ></Img>
            {console.log(Object.entries(bodyParts))}
            {Object.entries(bodyParts).map((part,index) => {
                return <Img src={"./Media/"+part[0]+"/default.png"} key={index} ></Img>
            })}
            <Img src="./Media/accessories/headphone.png" ></Img>
            <Img src="./Media/nose.png" ></Img>
        </LeftContainer>
        <RightContainer>
            <Accessories></Accessories>
            <AccessoriesOptions></AccessoriesOptions>
        </RightContainer>
        </>
    );
}

export default AvtarViewer;