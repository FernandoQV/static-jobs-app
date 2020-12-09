import React, { useContext } from 'react'
import JobsContext from '../../context/JobsContext'
import { Filter } from '../card/styledCard'
import { Close, ContainerFilters, ContainerPrincipal } from './stylesSearch'

const Search = () => {
    const {isVisibleSearch,filters,closeFilters,updateFilters}=useContext(JobsContext)
    const closeSearch=()=>{
        closeFilters()
        isVisibleSearch(false)
    }
    return (
        <ContainerPrincipal>
            <ContainerFilters>
                {
                    filters.map((filter,index)=>(
                        
                            <Filter key={index} onClick={()=>updateFilters(filter)}>{filter}</Filter>
                        
                    ))
                }
            </ContainerFilters>
            <Close onClick={()=>closeSearch()}>Close</Close>
        </ContainerPrincipal>
    )
}

export default Search
