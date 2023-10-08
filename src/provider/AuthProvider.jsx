import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Children, createContext } from "react";
import { auth } from "../firebase/firebaseConfig";

export const AuthContext = createContext(null)

// google provider
const GoogleProvider = new GoogleAuthProvider();

// facebook provider
const facebookProvider = new FacebookAuthProvider();




const AuthProvider = ({children}) => {

//signup
const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}


//google signIn
const googleSignIn = ()=>{
  return  signInWithPopup(auth, GoogleProvider)
}
//facebook signIn
const facebookSignIn = ()=>{
  return  signInWithPopup(auth, facebookProvider)

}








const authInfo={
    createUser,
    googleSignIn,
    facebookSignIn
}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;