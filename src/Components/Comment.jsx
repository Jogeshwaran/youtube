// to display 1 comment
// data needed -> commentsData[0]
// -> If we give the above data it should give name , comment like in yt
import { Avatar } from '@mui/material'
import React from 'react'

const Comment = ({data}) => {
    const {name , text} = data;
  return (
    <div className='mt-5 flex shadow-sm bg-gray-100 rounded-lg'>
      <Avatar />
      <div className='px-3'>
        <h3 className='font-bold'>{name}</h3>
        <p className=''>{text}</p>
      </div>
    </div>
  )
}

export default Comment
