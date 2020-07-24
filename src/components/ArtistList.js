import React from "react";
import ArtistItem from "./ArtistItem";

const ArtistList = ({ selectedArtist, songs, onArtistSelect }) => {
  const renderList = songs.map((song) => {
    return (
      <ArtistItem
        key={song.id}
        onArtistSelect={onArtistSelect}
        selectedArtist={selectedArtist}
        song={song}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};
export default ArtistList;
