import {createContext} from 'react'
import useJobs from '../hooks/useJobs'
const JobsContext=createContext();

const JobsProvider=({children})=>{
    const jobs=useJobs()
    return (
    <JobsContext.Provider value={jobs}>
            {children}
    </JobsContext.Provider>
    )
}

export {JobsProvider}
export default JobsContext