import React from 'react'
import Job from './Job'

function JobList({jobs}) {
    
    return (
    <div className="cards-container"> 
        {jobs.map(job => (
            <Job key={job.id} title={job.title} company={job.company} 
            isPublished={job.isPublished} userEmail={job.userEmail} description={job.description} 
            slug={job.slug} url={job.applyUrl}/>
        ))}
    </div>
  )
}

export default JobList