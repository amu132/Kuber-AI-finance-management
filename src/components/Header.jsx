import React from "react";
import logo from '../assets/logo-2.png'
function Header() {
  return (
    <div>
      <nav className="flex justify-between items-center p-8 px-28">
        <div className="flex items-center space-x-2">
            <img src={logo} alt="" />
          {/* <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full"></div>
          </div> */}
        </div>
        <div className="flex space-x-6">
          <a href="/" className="hover:text-purple-300">
            Home
          </a>
          <a href="/news" className="hover:text-purple-300">
            Exchange Rates
          </a>
          <a href="/cal" className="hover:text-purple-300">
            Calculator
          </a>
          <a href="/consult" className="hover:text-purple-300">
            Consult
          </a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-semibold">
          Explore Now
        </button>
      </nav>
    </div>
  );
}

export default Header;
