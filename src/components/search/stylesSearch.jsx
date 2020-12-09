import styled from 'styled-components'

const ContainerPrincipal=styled.div`
display:grid;
grid-template-columns:1fr 70px;
gap:1rem;
padding:1rem;
margin:1.5rem;
border:1px solid hsl(25,10%,30%);
border-radius:8px;
background-color:#97f3d4;
`;
const ContainerFilters=styled.div`
/* display:grid;
grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
gap:1rem; */
display:flex;
flex-wrap:wrap;
`;
const Close=styled.h3`
font-size:1rem;
color:hsl(180,25%,25%);
font-weight:500;
cursor: pointer;
:hover{
    color:#df1010;
    font-weight:700;
}
`;
export {ContainerPrincipal,ContainerFilters,Close}