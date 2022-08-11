import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetJob } from '../Apollo/Queries'
import { getDate } from '../helpers'
import Loading from './Loading'

function Detail() {

    const {companySlug, jobSlug} = useParams()
    const {loading, data} = useGetJob(companySlug, jobSlug)

    if(loading) return <Loading />

  return (
    <div className='conatiner'>
      <Link to='/'>
        <div className="detail-close"></div>
      </Link>
      <div className="wraper">
        <div>Job Detail</div>
        <div className="detail-container">
          
          <div className="detail-job">
            <div>
            <div className="title-main">{data.job.title}</div>
            <div className="company-job">
            <a href={data.job.company.websiteUrl}>
              <div>{data.job.company.name}</div>
            </a>
            </div>
            <div className='date'>{getDate(data.job.postedAt)}</div> 
            </div>

            <div>
              <div className="label">Job Type:</div>
              <div className="value">{data.job.commitment.title}</div>
            </div>


            {data.job.cities[0] && <div> 
              <div className="label">
              Cities: 
              </div>
              {data.job.cities.map(c => (<div key={c.id} className='value'>{c.name}</div>))} 
            </div>}

            {data.job.remotes[0] && <div className='value'>Remote</div>}

            {data.job.userEmail && <div> 
              <div className="label">
              Email: 
              </div>
              <div className='value'>{data.job.userEmail}</div> 
            </div>}

            <div className="tag-container">
              {data.job.tags.map(t => (
                <div key={t.id} className='tag'>{t.name}</div>
              ))}
            </div>

            <a href={data.job.applyUrl} target='new'>
              <button className="detail-apply">Apply</button>
            </a>

          </div>
          
          
          <div className="detail-desc">
            <div className="detail-title">
              Description
            </div>
            <div className="description-container">
              <div className="description">
                {data.job.description}
              </div>
            </div>
          </div>
        
        
        </div>
      </div>
    </div>
  )
}

export default Detail