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
  console.log(user);
  const NavLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookTickets"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
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
                className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
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
          {user ? (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
          ) : (
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <RxAvatar size={40} />
              </div>
            </label>
          )}

          <Link
            to="/login"
            onClick={handleLogout}
            className={`btn capitalize ml-3 px-10 text-white ${
              user ? "btn-primary" : "btn-info"
            }`}
          >
            {!user ? "Login" : "Logout"}
          </Link>
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
