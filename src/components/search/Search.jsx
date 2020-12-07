import React from 'react'
import { Close, ContainerFilters, ContainerPrincipal } from './stylesSearch'

const Search = () => {
    return (
        <ContainerPrincipal>
            <ContainerFilters></ContainerFilters>
            <Close>Close</Close>
        </ContainerPrincipal>
    )
}

export default Search
