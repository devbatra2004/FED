import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlinePlaylistRemove } from "react-icons/md";
import { removeSong } from './PlaylistSongSlice';
import { Link } from 'react-router-dom';
import Context from '../../pages/context/context';

const Playlist = () => {
  const dispatch = useDispatch();
  const { currentSong, isPlaying, playMusic, setPlay } = useContext(Context);
  const playList = useSelector(state => state.Playlist.AddedSongs);

  return (
    <div className="playlist-container">
      <div className="playlist-header">Your Playlist</div>
      <div className="playlist-songs">
        {playList && playList.length > 0 ? (
          playList.map((item, index) => (
            <div key={item.id} className="playlist-song">
              <div className="song-index" onClick={() => { playMusic(item); setPlay() }}>
                <IoPlayOutline size={20} />
              </div>
              <div className="song-info">
                <Link to={`/song/${item.id}`} className={currentSong && currentSong.id === item.id ? 'song-name active' : 'song-name'}>
                  {item.name}
                </Link>
                <Link to={`/album/${item.album.id}`} className="album-name">{item.album.name}</Link>
                <Link to={`/artist/${item.singer.id}`} className="singer-name">{item.singer.name}</Link>
              </div>
              <div className="remove-icon" onClick={() => dispatch(removeSong(item.id))}>
                <MdOutlinePlaylistRemove size={20} />
              </div>
            </div>
          ))
        ) : (
          <div className="empty-playlist-message">No songs added to the playlist</div>
        )}
      </div>
    </div>
  );
}

export default Playlist;
