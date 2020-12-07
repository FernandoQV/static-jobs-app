import React, { useContext } from "react";
import JobsContext from "../../context/JobsContext";
import {
  ContainerCard,
  ContainerFlexBasic,
  ContainerInterno,
  GridFooter,
} from "./containerCard";
import {
  Company,
  Contract,
  FeaturedButton,
  Lenguage,
  Level,
  Location,
  Logo,
  NewButton,
  Position,
  PostedAt,
  Role,
  Tool,
} from "./styledCard";

const Card = ({ job }) => {
  const {viewDate}=useContext(JobsContext)
  const {
    company,
    logo,
    news,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = job;
  return (
    <ContainerCard>
      <ContainerInterno>
        <Logo src={logo} />
        <ContainerFlexBasic>
          <Company>{company}</Company>{news && <NewButton>news</NewButton>} 
          {featured && <FeaturedButton>featured</FeaturedButton>}
        </ContainerFlexBasic>
        <Position>{position}</Position>
        <ContainerFlexBasic>
          <PostedAt>{postedAt}</PostedAt>
          <Contract>{contract}</Contract>
          <Location>{location}</Location>
        </ContainerFlexBasic>
        <GridFooter>
          <Role onClick={()=>viewDate(<Role/>)}>{role}</Role>
          <Level>{level}</Level>
          {languages.map((lenguage, index) => (
            <Lenguage key={index}>{lenguage}</Lenguage>
          ))}
          {tools.map((tool, index) => (
            <Tool key={index}>{tool}</Tool>
          ))}
        </GridFooter>
      </ContainerInterno>
    </ContainerCard>
  );
};

export default Card;
