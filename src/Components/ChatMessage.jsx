import { Avatar } from '@mui/material'
import React from 'react'

const ChatMessage = ({name,message}) => {
    
  return (
    <div className='flex items-center shadow-sm p-2'>
      <Avatar sx={{height:"30px", width : "30px"}} />
      <span className='font-bold px-2'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
