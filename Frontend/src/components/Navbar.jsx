import React ,{useState}from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useSelector } from 'react-redux';
import { logoutUser } from '../api/user.api';
import { logout } from '../store/slice/slice';
import { useDispatch } from 'react-redux';

const Navbar = () => {
const dispatch=useDispatch()
const navigate =useNavigate()
  const {isAuthenticated}=useSelector((state) => state.auth)
  const onLogout=()=>{
     try {
                const data = logoutUser();
                dispatch(logout())
                navigate({to:"/"})
               
                console.log("signin success")
            } catch (err) {
             
               console.log(err)
            }
  }
  return (
    <nav className="bg-white border   border-b-black">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
          </div>
          
          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {(isAuthenticated) ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, { 'User'}</span>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;