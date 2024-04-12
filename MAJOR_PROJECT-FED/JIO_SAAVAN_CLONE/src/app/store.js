import { configureStore } from '@reduxjs/toolkit'
import SearchedReducer from '../pages/SearchArtists/SearchSlice'
import PlaylistSongReducer from '../pages/playlist/PlaylistSongSlice'
export const store=configureStore({
    reducer:{
        Search:SearchedReducer,
        Playlist:PlaylistSongReducer,
    }
})
