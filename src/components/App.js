import React from "react";
import genius from "../apis/genius";
import SongList from "./SongList";
import ArtistList from "./ArtistList";
import Loader from "react-loader-spinner";
import "./List.css";

const ACCESSTOKEN =
  "7rf94im83hOZlV2_cwy0W4HakSTN0LapRliLV4S6vHShZOLiX6c-WprFiraUaKYr";

class App extends React.Component {
  state = {
    query: "",
    songs: [],
    artistSongs: [],
    selectedArtist: "",
  };
  componentWillMount() {
    genius.get("/search", {
        params: {
          q: "*",
          access_token: `${ACCESSTOKEN}`,
        },
      })
      .then((response) => {
        response.data.response.hits.forEach((element) => {
          this.setState({
            songs: [...this.state.songs, element.result],
          });
        });
      });
  }

  onArtistSelect = async (input) => {
    this.setState({ selectedArtist: input });
    const response = await genius.get(`/artists/${input}/songs`, {
      params: {
        per_page: 10,
        sort: "popularity",
        access_token: `${ACCESSTOKEN}`,
      },
    });
    this.setState({ artistSongs: response.data.response.songs });
  };

  render() {
    let msg;
    if (this.state.selectedArtist === "" && this.state.songs.length !== 0) {
      msg = <h2>Please Select Artist</h2>;
    }
    let loader;
    if ( this.state.artistSongs.length === 0 && this.state.selectedArtist !== "") {
      loader = (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={300}
          width={300}
          timeout={3000}
        />
      );
    }
    let Initialloader;
    if ( this.state.artistSongs.length === 0 && this.state.selectedArtist === "") {
      Initialloader = (
        <Loader
          type="Rings"
          color="#00BFFF"
          height={400}
          width={400}
          timeout={3000}
        />
        );
    }

    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Welcome to Music Player</h2>
        <hr />
        <div className="ui grid">
          {Initialloader}
          <div className="ui row">
            <div
              className="five wide column"
              style={{ border: "2px solid black" }}
            >
              <ArtistList
                onArtistSelect={this.onArtistSelect}
                songs={this.state.songs}
                selectedArtist={this.state.selectedArtist}
              />
            </div>
            <div
              className="nine wide column"
              style={{ border: "2px solid white", margin: "10px" }}>
              <SongList songs={this.state.artistSongs} />
              {msg}
              {loader}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
