import React, { useEffect, useState } from 'react'
import logo from '../assets/ytlogo.png'
import { Avatar } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Hamburger from '../assets/HamburgerMenu.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../utils/AppSlice';
import {YOUTUBE_SUGGESTION_URL} from '../utils/Constants'
import { cacheResults } from '../utils/CacheSlice';

const Header = () => {
    const dispatch = useDispatch();
    const toggleSidebarHandler = () => {
        dispatch(toggleSideBar());
    }

   
   

    //subscribing to the store for cache

    const cache = useSelector((store) => store.cache)

    const [searchQuery,setSearchQuery] = useState('')
    const [suggestions,setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)


    const tagsSearch =  useSelector((store)=> store.tag)
    const handleOnclick = () => {
      tagsSearch.tag.filter((tag) => console.log(tag))
    }

    //search optimization using debouncing
    // => make an api call afeter every key press
    //but if the difference beteween 2 key strokes is > 200ms
    //decline the api call
    
    //console.log(cache[searchQuery]);
    useEffect(()=> {
      // if the search query is in the cache we dont have to make an api call and we can directly set suggestions from there itself
      // else make an api call and set suggestion 

     const timer =  setTimeout(() => {
      if(cache[searchQuery]){
        setSuggestion(cache[searchQuery])
      }else{
        getSuggestion();
      }
      }, 200);

    return(() => {
      clearTimeout(timer);
    })
        
    },[searchQuery])

    const getSuggestion = async() => {
      const data = await fetch(YOUTUBE_SUGGESTION_URL + searchQuery)
      const json = await data.json()
      console.log(json);
      setSuggestion(json[1]);
      //if we cannot find in the cache we will make the api call and get the suggestion 
      // then we will store the suggestion in cacahe for future use, we will dispatch an action for that
      dispatch(cacheResults({
        // we will pass a object over here because that's how we initialised the state
        [searchQuery] : json[1]
      }))
    }
 
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-sm sticky top-0 bg-white z-[1000]'>
      <div className='flex col-span-1'>
      <img onClick={() => toggleSidebarHandler()} className=' h-6 w-6 mt-4 cursor-pointer' alt='icon' src={Hamburger} />
        <a href="/"><img className=' object-contain w-24 mx-2 cursor-pointer' alt='youtube-logo' src={logo} /></a>
      </div>

      <div className=' col-span-10 px-10 mt-2'>
        <input type='text' value={searchQuery}  onFocus = {() => setShowSuggestion(true)} onBlur = {()=> setShowSuggestion(false)} onChange={(e) => {setSearchQuery(e.target.value)} } placeholder='search' className='px-5 w-1/2 p-2 border border-gray-400 rounded-l-full' />
        <button className='border border-gray-400 p-2 rounded-r-full '>🔍</button>
      { showSuggestion && suggestions.length > 1 && (<div className='fixed bg-white py-2 px-2 mr-2 w-[26rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
          {suggestions.map((s) => <li className='py-2 shadow-sm'><button onClick={() => {handleOnclick()}}>🔍 {s}</button></li> )}
          
        </ul>
      </div>)}
      </div>
      
      <div className='col-span-1 flex justify-between mt-2'>
      `<NotificationsNoneIcon className='h-10 w-10' />
        <Avatar />
        
      </div>
    </div>
  )
}

export default Header;
