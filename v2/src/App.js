import "./App.css";
import Main from "./pages/main";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Submitted from "./pages/submitted";
import Stream from "./pages/stream";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/submitted" component={Submitted} />
        <Route
          path="/links/github"
          component={() => {
            window.location.href = "https://github.com/glask123";
            return null;
          }}
        />
        <Route
          path="/links/youtube"
          component={() => {
            window.location.href =
              "https://www.youtube.com/channel/UC0ZOHGEBcc15STsyv-mx76Q";
            return null;
          }}
        />
        <Route
          path="/links/lmp"
          component={() => {
            window.location.href = "https://www.lizamonjauzeproductions.com/";
            return null;
          }}
        />
        <Route
          path="/links/spotify"
          component={() => {
            window.location.href =
              "https://open.spotify.com/user/glask1234?si=aRIEHAtuSTSt5dLgF4iahw";
            return null;
          }}
        />
        <Route exact path="/apps/streamsync" component={Stream} />
      </Switch>
    </Router>
  );
}

export default App;
