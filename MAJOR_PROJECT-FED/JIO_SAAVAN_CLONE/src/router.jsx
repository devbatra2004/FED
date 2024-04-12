import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from './pages/Home/Home'
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import Login from "./pages/LoginSignup/Login";
import Signup from "./pages/LoginSignup/Signup";
import Searched from './pages/SearchArtists/Searched'
import SingerPage from "./pages/Singer/Singer";
import Song from "./pages/Song/Song";
import Album from './pages/Album/Album'
import Playlist from "./pages/playlist/Playlist";
const router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            
            {
                 path:'/Search',
                 element:<Searched/>
            },
            {
                 path:'/artist/:artistId',
                 element:<SingerPage/>
            },
            {
                 path:'/Album/:albumId',
                 element:<Album/>
            },
            {
                 path:'/Song/:songId',
                 element:<Song/>
            },
            {
                path:'/playlist',
                element:<Playlist/>
            },
            {
                path:'/profile/:id',
                element:<></>
            }
        ]
    },
    {
        path:'/LoginSignup',
        element:<LoginSignup/>,
        children:[
            {
                path:'/LoginSignup/',
                element:<Login/>,
            },
            {
                path:'/LoginSignup/signup',
                element:<Signup/>,
            }
        ]
    },
])
export default router