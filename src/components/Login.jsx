import React from "react"
import img1 from "../assets/Group-70.png"


export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#03052F] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex bg-black bg-opacity-30 rounded-xl overflow-hidden shadow-2xl">
        <div className="w-1/2 p-8 flex items-center justify-center">
          <IllustrationPlaceholder />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-white mb-6">WELCOME BACK</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              Login
            </button>
          </form>
          <button
            type="button"
            className="w-full mt-4 border border-gray-400 text-gray-300 hover:bg-gray-700 font-semibold py-2 px-4 rounded transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

function IllustrationPlaceholder() {
  return (
    <div className="w-96 h-96  rounded-xl flex items-center justify-center">
      <img src={img1} alt="" />
    </div>
  )
}