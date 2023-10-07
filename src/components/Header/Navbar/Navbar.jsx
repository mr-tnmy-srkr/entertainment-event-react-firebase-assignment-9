import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgCloseR } from "react-icons/cg";

const Navbar = () => {

const [isOpen,setIsOpen] = useState(true)

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

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label onClick={()=>setIsOpen(!isOpen)} tabIndex={0} className="btn btn-ghost lg:hidden">
             {
                isOpen?<HiMenuAlt1 size={30}></HiMenuAlt1> :<CgCloseR size={30}></CgCloseR>
             }
            </label>
           {isOpen ||  <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52`}
            >
              {NavLinks}
            </ul>}
          </div>
          <Link to="/" className="font-bold text-2xl cursor-pointer">Events</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>

        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>

          <a className="btn btn-primary capitalize ml-3 px-10">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
