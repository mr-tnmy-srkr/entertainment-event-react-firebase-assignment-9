import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgCloseR } from "react-icons/cg";
import useAuthContext from "../../../hook/useAuthContext";
import avatar from "../../../assets/avatar.jpg";
import { RxAvatar } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user, logOut } = useAuthContext();
const [show,setShow] = useState(false)


  console.log(show);
  const NavLinks = (
    <>
      <li className="text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-blue-700 font-bold text-lg" : "text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-blue-700 font-bold text-lg" : "text-lg font-medium"
          }
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookTickets"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-blue-700 font-bold text-lg" : "text-lg font-medium"
          }
        >
          Book Tickets
        </NavLink>
      </li>
    </>
  );

  //logout
  const handleLogout = () => {
    user &&
      logOut()
        .then(() => {
          toast.info("Logout successful!", {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage, {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              {isOpen ? (
                <HiMenuAlt1 size={30}></HiMenuAlt1>
              ) : (
                <CgCloseR size={30}></CgCloseR>
              )}
            </label>
            {isOpen || (
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow bg-base-100 rounded-box w-48`}
              >
              {NavLinks}
              </ul>
            )}
          </div>
          <Link to="/" className="font-bold text-2xl cursor-pointer">
            Entertain
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        <div className="navbar-end">
          {/* avatar part */}
          {user ? (
            <label
           
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar relative"
            >
              <div className="w-10 rounded-full"  onClick={()=>setShow(!show)}>
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
          ) : (
            <label
              
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar relative"
            >
              <div className="w-10 rounded-full"  onClick={()=>setShow(!show)}>
                <RxAvatar size={40} />
              </div>
            </label>
          )}

{/* user info */}

          {user && 
          show &&
            (<ul
              tabIndex={0}
              className={`font-bold menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box  absolute top-12 space-y-3`}
            >
              <li className="text-2xl ">{user?.displayName}</li>
              <li className="text-lg">Update Profile</li>
              <li className="text-lg">Settings</li>
              <li onClick={handleLogout} className="text-lg cursor-pointer">
                {user && "Logout"}
              </li>
            </ul>)
           }
         {/* login / logout button */}
{
  user ? <button onClick={handleLogout} className="btn btn-info capitalize ml-3 px-10 text-white">Logout</button> :
  <Link to="/login" onClick={handleLogout} > 
  <button className="btn btn-primary capitalize ml-3 px-10 text-white">Login</button></Link>
}

        </div>
      </div>
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Navbar;
