import "./App.css";
import Main from "./pages/main";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Submitted from "./pages/submitted";
import Stream from "./pages/stream";
import NotFound from "./pages/notfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  let isMobile = width < 500;
  if (!isMobile) {
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
  } else {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Please view on a larger display.
      </div>
    );
  }
}

export default App;
