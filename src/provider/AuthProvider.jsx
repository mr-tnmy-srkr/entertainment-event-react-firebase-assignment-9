import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Children, createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import swal from "sweetalert";

export const AuthContext = createContext(null);

// google provider
const GoogleProvider = new GoogleAuthProvider();

// facebook provider
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //signup
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn
  const googleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  //facebook signIn
  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };
//signOut
const logOut = () => {
    return signOut(auth)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
    });
    return ()=>{
        unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    createUser,
    userLogin,
    logOut,
    googleSignIn,
    facebookSignIn,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
