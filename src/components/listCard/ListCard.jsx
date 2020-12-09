import { useContext } from 'react'
import JobsContext from '../../context/JobsContext'
import Card from '../card/Card'
import { GridCards } from '../card/containerCard'
import Search from '../search/Search'

const ListCard = () => {
    const {jobs,search}=useContext(JobsContext)
    return (
        <>
        {
           search && <Search/>
        }
        <GridCards>
            {
                jobs.map(job=>(
                    <Card  key={job.id} job={job}/>
                ))
            }
        </GridCards>
        </>
    )
}

export default ListCard
