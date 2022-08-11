import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Search({setJobs, data}) {

    const [query, setQuery] = useState('')

    /**
     * Function to handle search query. Based on user input, it will update the state
     * using function (setJobs) that is passed to this component through props. 
     */
    function handleQuery(e){
        setQuery(e.target.value)
        if(e.target.value === '') 
            setJobs([...data.jobs])
        else
            setJobs(data.jobs.filter(j => j.title.toLowerCase().includes(e.target.value.toLowerCase()) || j.company.name.toLowerCase().includes(e.target.value.toLowerCase())))
    }

    useEffect(() => {
        console.log(data.jobs)
        setJobs([...data.jobs])
    },[data, setJobs])


  return (
    <input className='search'
    type="text"
    placeholder='Enter Job or Company'
    value={query}
    onChange={handleQuery}
    />
  )
}

export default Search