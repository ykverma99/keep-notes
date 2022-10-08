import React from 'react'

const Card = ({title,para}) => {
  return (
    <div className='border w-72 p-4 rounded-lg h-fit cursor-default'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <p>{para}</p>
    </div>
  )
}

export default Card