// import React from 'react';

// import { useContext } from "react";
import { GrFacebook } from "react-icons/gr";
import { ImGoogle3 } from "react-icons/im";
// import { AuthContext } from "../../provider/AuthProvider";
// import toast from "react-hot-toast";
// import useAuthContext from "../../hook/useAuthContext";

const SocialLogin = () => {
// const {googleSignIn} = useContext(AuthContext)
// const {googleSignIn,facebookSignIn} = useAuthContext()

const handleSocialLogin = (media)=>{console.log('object');}
//   media()
//   .then((result) => {
    // console.log(result.user);
    // toast.success("user logged in successfully");
   
//   })
//   .catch((error) => {
    // console.error(error.message);
    // toast.error(error.message);
//   });
// }


  return (
    <div>
      <div className="flex gap-4 lg:gap-0 lg:flex-row flex-col justify-center mt-8 w-full">
        <button onClick={()=>handleSocialLogin(googleSignIn)} className="flex-1 bg-red-500 text-white px-6 py-2 rounded-full mr-2 hover:bg-red-600 ">
          <p className="flex items-center justify-center gap-3">
          
            <span>Continue With </span>
            <span>
              <ImGoogle3 />
            </span>
          </p>
        </button>
        <button onClick={()=>handleSocialLogin(facebookSignIn)} className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          <p className="flex items-center justify-center gap-3">
          
            <span> Continue With</span>{" "}
            <span>
              <GrFacebook />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
