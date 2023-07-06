import styled from 'styled-components';


export const Wrapper=styled.div`
    height:100vh;
    display:grid;
    grid-template-rows:15% 65% 20%;
    grid-gap:2vh;
`;
export const MainContainer=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`;

export const Nav=styled.nav`
    font-size:3em;
    min-width:15em;
    margin-left:3em;
    font-weight:900;
    line-height:3em;
    display:flex;
`;

export const FooterContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;