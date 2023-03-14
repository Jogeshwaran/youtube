import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, randomMessage } from '../utils/helper';
import store from '../utils/store';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState("")

    const dispatch = useDispatch();
    const ChatMessages = useSelector((store) => store.chat.messages)
    console.log(ChatMessages);
     //Api polling means we get the data from the server every 2s
     useEffect(()=>{
        // we have to create a interval for every 2 seconds

        const i = setInterval(()=>{
            //call api
            console.log(
                "Api is polled"
            );
            dispatch(addMessage({
                name : generateRandomName(),
                message : randomMessage(15)
            }))
        },1000)

        //clear the interval when you set

        return () => clearInterval(i)

        
    },[])
  return (
   <>
    <div className='w-full h-[450px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>{ChatMessages.map((c,i) => (
            <ChatMessage key={i} name={c.name} message = {c.message} />
        ))}
        </div>
      
    </div>
    <form className='w-full p-2 ml-2 border border-black rounded-lg' onSubmit={(e) => {
        e.preventDefault();
        dispatch(addMessage({
            name : "Jogesh",
            message : liveMessage
        }))
        setLiveMessage('')
    }}>
        <input className='px-2 w-64 ' type="text" value={liveMessage} onChange={(e) => {setLiveMessage(e.target.value)}} />
        <button className='px-2 mx-4 bg-green-100'>send</button>
    </form>
    </>
  )
}

export default LiveChat
