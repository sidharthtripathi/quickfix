import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import store from "./store/store";
import {Provider} from 'react-redux'

// import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Side */}
      <div className="flex flex-1 items-center justify-center p-10">
        <div className="w-full max-w-md">
          <div
            className="bg-white p-8 border-t-4 rounded-lg shadow-lg"
            style={{ borderColor: "#39B792" }}
          >
            <div className="mb-4">
              <h2
                className="text-2xl font-bold text-center"
                style={{ color: "#39B792" }}
              >
                Login to Your Account
              </h2>
              <p className="text-sm text-center text-gray-600">
                Login using social networks
              </p>
              <div className="flex justify-center mt-4">
                {/* Replace these with actual icons */}
                <a href="#" className="text-blue-600 mx-2">
                  FB
                </a>
                <a href="#" className="text-red-600 mx-2">
                  G+
                </a>
                <a href="#" className="text-blue-800 mx-2">
                  IN
                </a>
              </div>
            </div>
            <div className="mb-4">
              <hr className="mb-5" />
              <input
                className="w-full px-3 py-2 mb-3 border rounded-md"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full px-3 py-2 mb-3 border rounded-md"
                type="password"
                placeholder="Password"
              />
              <div className="text-right text-sm">
                <a href="#" className="text-purple-600 hover:text-purple-700">
                  Forgot Password?
                </a>
              </div>
              <button
                className="w-full px-3 py-2 mt-4 text-white rounded-md"
                style={{ backgroundColor: "#39B792" }}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="flex-1 text-white p-10"
        style={{ backgroundColor: "#39B792" }}
      >
        <div className="w-full max-w-md m-auto">
          <h2 className="text-3xl font-bold mb-2">New Here?</h2>
          <p className="mb-6">
            Sign up and discover a great amount of new opportunities!
          </p>
          <button
            className="px-4 py-2 bg-white font-bold rounded hover:bg-gray-200"
            style={{ color: "#39B792" }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
    </>
  );
  // return <LoginPage />
};
export default App;
