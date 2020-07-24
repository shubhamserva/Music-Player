import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const ArtistItem = ({ selectedArtist, song, onArtistSelect }) => {
  return (
    <List width="100px">
      <ListItem
        style={{
          backgroundColor:
            song.primary_artist.id === selectedArtist ? "lightblue" : "",}}
            button>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={song.primary_artist.image_url} />
        </ListItemAvatar>
        <ListItemText
          primary={song.primary_artist.name}
          onClick={() => {
            onArtistSelect(song.primary_artist.id);
          }}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
export default ArtistItem;
