import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useGetAllJobs } from '../Apollo/Queries'
import JobList from './JobList'
import Loading from './Loading'
import Search from './Search'

function Home() {

    const {loading, data} = useGetAllJobs()
    const [jobs, setJobs] = useState([])

    if(loading) return <Loading />

  return (
    <div className='job-conatiner'>
        <div className="job-wraper">
            <div> All Jobs </div>
            <Search setJobs={setJobs} data={data}/>
            <JobList jobs={jobs}/>
        </div>
    </div>
  )
}

export default Home