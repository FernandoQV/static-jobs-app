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
  const { readFilters } = useContext(JobsContext);
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
          <Company>{company}</Company>
          {news && <NewButton>news</NewButton>}
          {featured && <FeaturedButton>featured</FeaturedButton>}
        </ContainerFlexBasic>
        <Position>{position}</Position>
        <ContainerFlexBasic>
          <PostedAt>{postedAt}</PostedAt>
          <Contract>{contract}</Contract>
          <Location>{location}</Location>
        </ContainerFlexBasic>
        <GridFooter>
          <Role onClick={() => readFilters(role)}>{role}</Role>
          <Level onClick={() => readFilters(level)}>{level}</Level>
          {languages.map((lenguage, index) => (
            <Lenguage key={index} onClick={() => readFilters(lenguage)}>
              {lenguage}
            </Lenguage>
          ))}
          {tools.map((tool, index) => (
            <Tool key={index} onClick={() => readFilters(tool)}>
              {tool}
            </Tool>
          ))}
        </GridFooter>
      </ContainerInterno>
    </ContainerCard>
  );
};

export default Card;
