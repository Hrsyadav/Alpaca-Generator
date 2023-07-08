import React, { useState } from "react";
import {Wrapper,Nav,MainContainer,FooterContainer} from './AppStyle.js';
import AvtarViewer from './components/AvtarViewer';
import Footer from './components/Footer';
import {toPng} from 'html-to-image';

function App(){
    const [random,setRandom]=useState({});
    const handleGenerateRandomAlpac=(randomParts)=>{
        setRandom(randomParts);
    };
    const handleDownloadImage=()=>{
        let canvas=document.querySelector('#alpaca');
        toPng(canvas).then(dataUrl => {
            var link = document.createElement('a');
            link.download = 'alpaca.png';
            link.href = dataUrl;
            link.click();
          });
    };
    return(
        <Wrapper>
            <Nav>
                ALPACA GENERATOR
            </Nav>
            <MainContainer>
                <AvtarViewer randomParts={random} >

                </AvtarViewer>
            </MainContainer>
            <FooterContainer><Footer onGenerateRandomAlpaca={handleGenerateRandomAlpac} onDownloadImage={handleDownloadImage}></Footer></FooterContainer>
        </Wrapper>
    );


}

export default App;