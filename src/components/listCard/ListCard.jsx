import { useContext } from 'react'
import JobsContext from '../../context/JobsContext'
import Card from '../card/Card'
import { GridCards } from '../card/containerCard'

const ListCard = () => {
    const {jobs}=useContext(JobsContext)
    return (
        <GridCards>
            {
                jobs.map(job=>(
                    <Card  key={job.id} job={job}/>
                ))
            }
        </GridCards>
    )
}

export default ListCard
