import { useState, useEffect } from "react";
import getData from "../helpers/getData";
const useJobs = () => {

  const [jobs, setJobs] = useState([]);
  const viewDate=(dates)=>{
        console.log(dates)
  }
  useEffect(() => {
    setJobs(getData());
  }, []);

  return { jobs ,viewDate};
};

export default useJobs;
