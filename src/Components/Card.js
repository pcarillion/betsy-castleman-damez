import React from 'react'

const Card = ({data}) => {
  return (
    <div className="card">
        <img src={data.fields.file.url} alt={data.fields.title}/>
        <p>{data.fields.title}</p>
        <p>{data.fields.description}</p>
    </div>
  )
}

export default Card