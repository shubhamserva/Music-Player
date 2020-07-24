import React from "react";
import SongItem from "./SongItem";

const SongList = ({ songs, onArtistSelect }) => {
  const renderList = songs.map((song) => {
    return (
      <SongItem key={song.id} onArtistSelect={onArtistSelect} song={song} />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};
export default SongList;
