// Reducers

// a static list of songs
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Abba', duration:'4:33'},
    { title: 'Aerosmith', duration:'4:03'},
    { title: 'Backstreet Boys', duration: '2:45'},
    { title: '2PAC Eminem', duration:'2:33'},
  ];
};

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

