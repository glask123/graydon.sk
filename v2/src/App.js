import "./App.css";
import Main from "./pages/main";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Submitted from "./pages/submitted";
import Stream from "./pages/stream";
import NotFound from "./pages/notfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/submitted" component={Submitted} />
        <Route exact path="/apps/streamsync" component={Stream} />
        <Route path="/not-found" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
