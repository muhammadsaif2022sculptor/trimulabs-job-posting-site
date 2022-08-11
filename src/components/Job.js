import React from 'react'
import { Link } from 'react-router-dom'

function Job({title, company, isPublished, userEmail, description, url ,id}) {

  return (
    <div className='card-container'>
        <div>
            <div className="card-title">{title}</div>
            <div className="card-company">{company}</div>
        </div>
        <div>
            {isPublished ? <div className="isPublished">Open</div> : 
            <div className="closed">Closed</div>
            }
            <div className="card-email">{userEmail}</div>
        </div>
        <div className="card-desc">{description}</div>
        <div>
        <a href={url}>
            <button className="card-apply">Apply</button>
        </a>
        <Link to={'/detail'}>
            <button className="card-detail">Detail</button>
        </Link>
        </div>
    </div>
  )
}

export default Job