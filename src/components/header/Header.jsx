import React from 'react'
import styled from 'styled-components'
const ContainerHeader=styled.div`
height:100px;
background-image:url('/images/bg-header-mobile.svg');
background-color:hsl(180, 29%, 50%);
background-size:cover;
background-position:right;
@media screen and (min-width:374px){
    background-image:url('/images/bg-header-desktop.svg');
}
`;
const Header = () => {
    return (
        <ContainerHeader/>
    )
}

export default Header
