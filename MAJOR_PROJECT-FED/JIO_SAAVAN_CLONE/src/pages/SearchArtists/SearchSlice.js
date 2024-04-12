import { createSlice } from '@reduxjs/toolkit'
import singers from '../../data/Artist'
import Albums from '../../data/Albums'
import songs from '../../data/songs'
const initialState={

    result:
    {
        singer:[],
        album:[],
        song:[]
    }    
}
export const SearchSlice=createSlice({
    name:"Search",
    initialState,
    reducers:{
        Search:((state,action)=>{
            console.log(action.payload)
            state.result.singer=singers.filter(item=>item.name.toLowerCase().includes(action.payload.toLowerCase())||action.payload.toLowerCase().includes(item.name.toLowerCase()))
            state.result.album=Albums.filter(item=>item.name.toLowerCase().includes(action.payload.toLowerCase())||action.payload.toLowerCase().includes(item.name.toLowerCase()))
            state.result.song=songs.filter(item=>item.name.toLowerCase().includes(action.payload.toLowerCase())||action.payload.toLowerCase().includes(item.name.toLowerCase()))
            
            Albums.forEach(item=>(state.result.song.find(i=>i.album.id==item.id)&&!state.result.album.find(i=>i.id==item.id))&&state.result.album.push(item))
            singers.forEach(item=>(state.result.song.find(i=>i.singer.id==item.id)&&!state.result.singer.find(i=>i.id==item.id))&&state.result.singer.push(item))
        })
    }
})

export default SearchSlice.reducer
export  const {Search}=SearchSlice.actions;