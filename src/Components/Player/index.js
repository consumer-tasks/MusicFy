import React, { useState, useEffect, useContext } from "react";
import SongContext from '../../SongContext'

const Player = (props) => {
  const context = useContext(SongContext)
  const [song, setPlay] = useState(context[0]);
  const [songName, setName] = useState("")
  const [video, setVideo] = useState('no-video')

  useEffect(() => {
    const {link, name} = context[0];
    setPlay(link + '?autoplay=1')
    setName(name)

    if (name) {
      setVideo('video')
    }

  }, [context, songName]);

  return (
    <div>
        <h1 className="text-center">You are currently listening: {songName}</h1>
        {video == 'no-video' ? ( <React.Fragment></React.Fragment>) : (
           (
            <div>
              <div>
                <iframe
                  className="embed-responsive col-xs-6 text-center"
                  width="560"
                  height="315"
                  src={song}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
              ></iframe>
              </div>
           </div>
          )
        )}
    </div>
  );
};

export default Player;
