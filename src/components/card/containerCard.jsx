import styled,{css} from 'styled-components'

const ContainerCard=styled.div`
padding:0 1rem 1rem;
border-left:3px solid hsl(180, 29%, 50%);
border-radius:5px;

background-color:#ffffff;
`;
const cssFlex=css`
display:flex;

`;
const ContainerInterno=styled.div`
${cssFlex};
flex-direction:column;
transform:translateY(-25px);
`;
const ContainerFlexBasic=styled.div`
${cssFlex};
align-items:center;
margin:.5rem 0;
`;
const GridFooter=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
gap:.5rem;
`;
const GridCards=styled.div`
display:grid;
grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
gap:3rem;
background-color:#c9e6e6;
padding:3rem 1.5rem;
`;
export {ContainerCard,ContainerInterno,ContainerFlexBasic,GridFooter,GridCards}


