import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "./List.css";

const SongItem = ({ song, onArtistSelect }) => {
  return (
    <List width="100px">
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={song.header_image_url} />
        </ListItemAvatar>
        <ListItemText
          primary={song.full_title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className="inline"
                color="textPrimary"
                onClick={() => {
                  onArtistSelect(song.primary_artist.id);
                }}
              >
                {song.primary_artist.name}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};
export default SongItem;
