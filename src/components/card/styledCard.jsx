import styled,{css} from 'styled-components'

const Logo=styled.img`
height:50px;
width:50px;
object-fit:cover;
object-position:center;
border-radius:50%;
`;
const Company=styled.h2`
color:hsl(180, 29%, 50%);
font-size:1rem;
font-weight:700;
margin-right:1rem;
`;
const cssButton=css`
text-transform:uppercase;
border:none;
border-radius:15px;
font-size:1rem;
font-weight:500;
padding:.5rem;
margin-right:1rem;
`;
const NewButton=styled.button`
${cssButton};
background-color: hsl(180, 29%, 50%);
color:#fff;
`;
const FeaturedButton=styled.button`
${cssButton};
background-color: hsl(180, 14%, 20%);
color:#fff;
`;
const Position=styled.h1`
color:hsl(180, 14%, 20%);
font-size:1.2rem;
font-weight:700;
`;
const cssDescription=css`
color:hsl(180, 8%, 52%);
font-size:1rem;
font-weight:500;
margin-right:.8rem;
`;
const PostedAt=styled.h3`
${cssDescription};
`;
const Contract=styled.h3`
${cssDescription};
`;
const Location=styled.h3`
${cssDescription};
`;
const cssRoleLevelLengaugesTools=css`
background-color:#c9f8f8;
color:hsl(180, 29%, 50%);
font-size:1rem;
font-weight:700;
border:none;
border-radius:5px;
padding:.5rem 1rem;
text-align:center;
cursor: pointer;
`;
const Role=styled.h3`
${cssRoleLevelLengaugesTools};
`;
const Level=styled.h3`
${cssRoleLevelLengaugesTools};
`;
const Lenguage=styled.h3`
${cssRoleLevelLengaugesTools};
`;
const Tool=styled.h3`
${cssRoleLevelLengaugesTools};
`;
const Filter=styled.h3`
${cssRoleLevelLengaugesTools};
margin-right:1rem;
`;

export {Logo,Company,NewButton,FeaturedButton,Position,PostedAt,Contract,Location,Role,Level,Lenguage,Tool,Filter}
