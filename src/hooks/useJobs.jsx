import { useState, useEffect } from "react";
import getData from "../helpers/getData";
const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState(false);
  const [filters, setFilters] = useState([]);
  const readFilters = (filter) => {
    isVisibleSearch(true);
    !filters.includes(filter) && setFilters([...filters, filter]);
  };

  const closeFilters = () => {
    setFilters([]);
    ;
  };
  const isVisibleSearch = (option) => {
    setSearch(option);
  };
  const updateFiltersJobs = (array) => {
    console.log(array);
    let newJobs = getData();
    array.forEach((el) => {
      newJobs = [
        ...newJobs.filter((job) => {
          return (
            job.role === el ||
            job.level === el ||
            job.languages.includes(el) ||
            job.tools.includes(el)
          );
        }),
      ];
    });
    setJobs([...newJobs]);
    console.log(newJobs,'se renderizo filters');
  };
  const updateFilters=(filter)=>{
    setFilters(filters.filter(f=>{
      return f!==filter
    }))

  }
  useEffect(() => {
    setJobs(getData());
  }, []);
  useEffect(() => {
    console.log("actualizando el estado de jobs");
    updateFiltersJobs(filters);
  }, [filters]);
  return {
    jobs,
    search,
    filters,
    readFilters,
    closeFilters,
    isVisibleSearch,
    updateFiltersJobs,
    updateFilters
  };
};

export default useJobs;
