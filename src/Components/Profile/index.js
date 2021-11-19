import React, { useState, useEffect } from "react";

import SongService from "../../Services/Song";

const Profile = () => {
  const [isLoad, setLoad] = useState(false);
  const [songs, setSongs] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    SongService.getFavoritesUser(uid).then((resultSongs) => {
      if (resultSongs.length === 0) {
        setMessage("There are no songs");
      } else {
        setSongs(resultSongs);
      }
      setLoad(true);
    });
  }, []);

  if (!isLoad) {
    return (
      <div className="d-flex justify-content-center bg-info">Loading...</div>
    );
  }

  return (
    <div className="row py-5 px-4">
      <div className="col-md-5 mx-auto">
        <div className="bg-dark w-100 shadow rounded overflow-hidden">
          <div className="px-4 pt-0 pb-4 cover">
            <div className="media align-items-end profile-head">
              <div className="profile mr-3">
                <img
                  src="https://img.favpng.com/10/14/2/avatar-computer-icons-user-profile-business-png-favpng-uVq05zLDgFqFDHD2EF87qrVMA.jpg"
                  alt="avatar"
                  width="130"
                  className="rounded mb-2 img-thumbnail"
                />
              </div>
            </div>
          </div>
          <div className="py-4 px-4">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="mb-0 text-white">Favorites songs</h5>
            </div>

            <div className="row">
              {message ? (
                <div className="m-auto text-white">{message}</div>
              ) : (
                songs.map((song) => {
                  return (
                    <div key={song.name} className="col-lg-6 mb-2 pr-lg-1">
                      <img
                        src={song.image}
                        alt="song avatar"
                        className="img-fluid rounded shadow-sm"
                      />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
