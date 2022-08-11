import React from 'react'
import { useNavigate } from 'react-router-dom'

function Detail() {
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(-1)}>Detail</div>
  )
}

export default Detail