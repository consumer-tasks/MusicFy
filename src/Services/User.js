import firebase from "firebase";

export default {
  register: async (email, password) => {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    return result.user || false;
  },
  login: async (email, password) => {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    return result;
  },
};
