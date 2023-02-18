import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_CATEGORIES } from '../utils/Constants';

const TopicsButtonList = () => {
  const [categories,setcategories] = useState([])
  useEffect(()=>{
    getApiData();
  },[])

  const getApiData = async() =>{
    const data = await fetch(YOUTUBE_VIDEO_CATEGORIES);
    const json = await data.json()
    console.log(json.items);
    setcategories(json.items)

  }
  return (
    <div>
      {categories.slice(0,9).map((category) => (
        <button key={category.id} className= 'm-2 rounded-xl bg-gray-100 p-2'>{category.snippet.title}</button>
      ))}
        
    </div>
  )
}

export default TopicsButtonList
