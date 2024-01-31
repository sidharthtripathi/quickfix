import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import Login from "./components/auth/LoginPage";

const App = () => {
  // return <RouterProvider router={router} />
  return <Login />;
};

export default App;
