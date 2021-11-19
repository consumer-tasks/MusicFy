import React, { useState, useEffect, useContext } from "react";
import firebase from "../../config";

import SongContext from "../../SongContext";
import SongService from "../../Services/Song";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [currentCount, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(6);
  const [favoriteMessage, setMessage] = useState("");
  const [alert, setAlert] = useState(false);
  const [messageStyles, setStyles] = useState("");

  let setSong = useContext(SongContext);

  useEffect(() => {
    SongService.getAll().then((songs) => {
      setSongs(songs);
    });
  }, []);

  const playSong = (e) => {
    const songData = JSON.parse(e.target.value);
    setSong[1](songData);
  };

  const setTimeoutMessage = (message) => {
    setTimeout(() => {
      setMessage(message);
      setAlert(true);
    }, 1000);
  };

  const addFavorite = async (e) => {
    const id = e.target.value;
    const uid = localStorage.getItem("uid");
    if (uid) {
      await SongService.addFavorite(uid, id);
      setTimeoutMessage("Successfully add to favorites");
      setStyles(
        "d-flex justify-content-center w-50 m-auto border border-success bg-success text-light"
      );
    } else {
      setTimeoutMessage("You must log in to add to favorites");
      setStyles(
        "d-flex justify-content-center w-50 m-auto border border-danger bg-danger text-light"
      );
    }
  };

  if (alert) {
    setTimeout(() => {
      setAlert(false);
      setMessage("");
    }, 1000);
  }

  const nextSongs = () => {
    if (maxCount < songs.length) {
      setCount(maxCount);
      setMaxCount(maxCount + 6);
    }
  };

  const prevSongs = () => {
    if (!(currentCount === 0 && maxCount === 6)) {
      setCount(currentCount - 6);
      setMaxCount(maxCount - 6);
    }
  };

  const currentSongs = songs.slice(currentCount, maxCount);
  return (
    <div>
      {alert && favoriteMessage ? (
        <span className={messageStyles}>{favoriteMessage}</span>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <div className="row m-auto">
        {currentSongs.map((song) => {
          const songData = JSON.stringify({
            name: song.name,
            link: song.youtubeLink,
          });

          return (
            <div key={song.id} className="col-lg-4 flex-wrap">
              <h2 className="text-dark text-center">{song.name}</h2>

              <div className="text-center">
                <img className="w-50 h-50" src={song.image} />
              </div>

              <div className="row m-2 align-items-center">
                <button
                  className="m-auto btn btn-primary"
                  value={songData}
                  onClick={playSong.bind(this)}
                >
                  Play
                </button>
              </div>

              <div className="row m-2 align-items-center">
                <button
                  onClick={addFavorite}
                  value={song.id}
                  className="text-uppercase m-auto mb-3 btn btn-danger"
                >
                  add to favorites
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <nav className="mt-4 nav justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={prevSongs}>
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={nextSongs}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
