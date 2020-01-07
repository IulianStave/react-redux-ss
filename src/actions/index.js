// Action creator
// named export (instead of default export)
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };  
};