import { createSlice } from '@reduxjs/toolkit'
const initialState={
    AddedSongs:[]
}


export const PlaylistSongSlice=createSlice({
    name:"Playlist",
    initialState,
    reducers:{
        AddSong:(state,action)=>{
            if(!state.AddedSongs?.find(item=>item.id==action.payload.id))
            {
                state.AddedSongs.push(action.payload)
            }
        },
        removeSong:(state,action)=>{
                state.AddedSongs=state.AddedSongs.filter(item=>item.id!=action.payload)
        }
    }
})

export  const {AddSong,removeSong}=PlaylistSongSlice.actions
export default PlaylistSongSlice.reducer