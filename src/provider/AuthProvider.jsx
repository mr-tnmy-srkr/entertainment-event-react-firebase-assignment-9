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
  const [loading, setLoading] = useState(true);

  //signup
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  //facebook signIn
  const facebookSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };
//signOut
const logOut = () => {
    return signOut(auth)
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
    });
    return ()=>{
        unsubscribe();
    }
  }, []);

  const authInfo = {
    user,
    loading,
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
