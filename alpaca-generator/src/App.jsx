import React from "react";
import {Wrapper,Nav,MainContainer,FooterContainer} from './AppStyle.js';
import AvtarViewer from './components/AvtarViewer';
import Footer from './components/Footer';

function App(){
    return(
        <Wrapper>
            <Nav>
                ALPACA GENERATOR
            </Nav>
            <MainContainer>
                <AvtarViewer>

                </AvtarViewer>
            </MainContainer>
            <FooterContainer><Footer></Footer></FooterContainer>
        </Wrapper>
    );


}

export default App;