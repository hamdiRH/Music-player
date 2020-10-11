import React from "react";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { MusicPlayerProvider } from "./MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="music-player">
        <Nav />
        <div className="container">
          <TrackList />
          <PlayerControls />
        </div>
        <Footer />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
