import React from 'react'
import JobList from './JobList'
import Search from './Search'

function Home({data, jobs, setJobs}) {

  return (
    <div className='conatiner'>
        <div className="wraper">
            <div> All Jobs </div>
            <Search setJobs={setJobs} data={data}/>
            <JobList jobs={jobs}/>
        </div>
    </div>
  )
}

export default Home