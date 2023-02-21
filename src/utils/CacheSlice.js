import { createSlice } from "@reduxjs/toolkit";

//we are using redux to store the cache of the suggestion list
// We will store the search result of api call in the store
// so everytime we search for the same keyword once again it should not make an API call for the item we searched before


const cacheSlice = createSlice({
    name : 'cache',
    initialState : {
        //empty object
        

    },
    reducers : {
        // we will store result like this
        //{ip : ["iphone", "iphone13",..]}
        cacheResults : (state,action) => {
            state = Object.assign(state, action.payload)
            
            console.log(action.payload);
            console.log(state)
        }
       
    }
})

export const {cacheResults} = cacheSlice.actions;
export default cacheSlice.reducer;


// D.s for storing the cache

// --> If we store cache results in array 
        // -> time complexity = O(n)
        // -> if we use the array methods also the complexity will be Same 


// -> So we store in the map / object 
    // --> time complexity = O(1)
    // which is more optimized than the O(n)