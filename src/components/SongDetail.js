import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  // console.log(props);
  if (!song){
    return <div>Select a song</div>
  }
  return (
    <div>
      <h3>Title: {song.title}</h3>
      <h4>Duration {song.duration}</h4>
    </div>
  );
}

const mapStateToProps = (state) => {
  // get selectedSong from combineReducers inside reducers
  return {song: state.selectedSong};
}

export default connect(mapStateToProps)(SongDetail);