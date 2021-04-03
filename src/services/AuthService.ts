import firebase from '../config/Firebase';
import User from '../model/User';

export const login = async (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logout = async () => {
  firebase.auth().signOut();
};

export const isLogged = async () => {
  const user = await firebase.auth().currentUser;
  return user;
};

export const resetPassword = async (email: string) => {
  firebase.auth().sendPasswordResetEmail(email);
};

export const create = async (user: User) => {
  return new Promise<firebase.auth.UserCredential>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(userData => {
      userData.user?.updateProfile({
        displayName: user.name,
        photoURL: ''
      }).then(() => {
        firebase.auth().updateCurrentUser(userData.user);
        resolve(userData);
      }); 
    },
    err => reject(err))
  });
};
