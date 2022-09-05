import Home from "./screen/Home/Home"
import { Route, Switch } from "react-router-dom";
import './App.css'
import Favourites from "./screen/Favourites/Favourites";
import HotTracks from "./screen/HotTracks/HotTracks";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/favoritos" component={Favourites} />
        <Route path="/hot-tracks" component={HotTracks} />
      </Switch>
    </>
  );
}

export default App;
