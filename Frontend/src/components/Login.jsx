import React from "react";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-[50vw] h-[50vh] bg-gray-900 font-sans text-white rounded-xl">
      <div className="w-[90vw] h-[70vh]  mx-auto p-8 md:p-10 bg-slate-800 rounded-xl shadow-2xl space-y-6">
        <form action="#" method="POST">
          <h1 className="font-extrabold text-4xl text-center text-white w-full h-20">
            Login
          </h1>

          <div className="relative">
            <div className="absolute w-70 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition duration-200 ease-in-out"
              placeholder="Username" // Capitalized for better UX
              required
            />
          </div>

          <div className="relative mt-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <LockClosedIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              placeholder="Password" // Capitalized for better UX
              required
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 bg-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 transition duration-200 ease-in-out"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <label
              htmlFor="rememberMe"
              className="flex items-center text-gray-300 cursor-pointer"
            >
              <input
                id="rememberMe"
                type="checkbox"
                className="mr-2 h-4 w-4 accent-blue-500 rounded focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
              />
              Remember me
            </label>

            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 hover:underline transition duration-200 ease-in-out"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Login
          </button>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-300">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-blue-400 hover:text-blue-300 hover:underline transition duration-200 ease-in-out"
              >
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
