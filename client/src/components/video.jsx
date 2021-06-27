import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Video(props) {
  const [url, setUrl] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUrl(value + "%2F");
    setLoaded(true);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  if (!loaded) {
    return (
      <div className="video">
        <div className="novideo">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              className="vidinput"
              onChange={handleChange}
            />
            <input type="submit" value="ENTER" className="vidbutton" />
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="video">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          playing={props.playing}
          controls={true}
          config={{
            youtube: {
              preload: true,
            },
          }}
        />
      </div>
    );
  }
}
