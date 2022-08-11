import React from 'react'
import Job from './Job'

function JobList({jobs}) {
    
    return (
    <div className="cards-container"> 
        {jobs.map(job => (
            <Job key={job.id} title={job.title} company={job.company.name} 
            isPublished={job.isPublished} userEmail={job.userEmail} description={job.description} 
            id={job.id} url={job.applyUrl}/>
        ))}
    </div>
  )
}

export default JobList