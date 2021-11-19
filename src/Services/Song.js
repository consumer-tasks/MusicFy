import firebase from "firebase";

const getCollectionUser = async (uid) => {
  let favorites = await firebase.firestore().collection("favorites").get();
  let userDoc = [];
  favorites.docs.forEach((f) => {
    const obj = f.data();
    if (obj.userId === uid) {
      userDoc.push({ id: f.id, ...obj });
    }
  });

  return userDoc[0];
};

const getAll = async () => {
  let songs = await firebase.firestore().collection("songs").get();
  songs = songs.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return songs;
};

const extractSongs = async (userCollection) => {
  const songs = [];
  for (const id of userCollection) {
    const song = await firebase
      .firestore()
      .collection("songs")
      .doc(id)
      .get()
      .then((doc) => {
        return doc.data();
      });
    songs.push(song);
  }

  return songs;
};

const createUserFavoriteCollection = async (uid, id) => {
  const document = await firebase
    .firestore()
    .collection("favorites")
    .doc(uid)
    .get();
  await document.ref.set({
    id: uid,
    userId: uid,
    songs: [id],
  });
};

export default {
  getAll,
  getFavoritesUser: async (uid) => {
    const userCollection = await getCollectionUser(uid);
    return userCollection ? await extractSongs(userCollection.songs) : [];
  },

  addFavorite: async (uid, id) => {
    let userDoc = await getCollectionUser(uid);

    //not exist user in favorites collection
    if (!userDoc) {
      createUserFavoriteCollection(uid, id);
      userDoc = await getCollectionUser(uid);
    } else {
      userDoc.songs.push(id);
      await firebase.firestore().collection("favorites").doc(userDoc.id).set({
        userId: userDoc.userId,
        songs: userDoc.songs,
      });
    }
  },
};
