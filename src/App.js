import Home from "./screen/Home/Home"
import { Route, Switch } from "react-router-dom";
import './App.css'
import Favourites from "./screen/Favourites/Favourites";
import HotTracks from "./screen/HotTracks/HotTracks";
import Footer from "./components/Footer/Footer";
import DetailTrack from "./screen/DetailTrack/DetailTrack";
import DetailAlbum from "./screen/DetailAlbum/DetailAlbum";
import DetailArtist from "./screen/DetailArtist/DetailArtist";
import FavouriteArtists from "./screen/FavouriteArtists/FavouriteArtists";
import BestAlbums from "./screen/BestAlbums/BestAlbums";
import NotFound from "./screen/NotFound/NotFound";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/favoritos" component={Favourites} />
        <Route path="/hot-tracks" component={HotTracks} />
        <Route path="/favourite-artists" component={FavouriteArtists} />
        <Route path="/best-albums" component={BestAlbums} />
        <Route path="/DetailTrack/id/:id" component={DetailTrack} />
        <Route path="/DetailAlbum/id/:id" component={DetailAlbum} />
        <Route path="/DetailArtist/id/:id" component={DetailArtist} />
        <Route path="" component={NotFound} />

      </Switch>
      <Footer />
    </>
  );
}

export default App;
