import React from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      This is the content of home page
      <Outlet />
    </>
  );
}

export default App;
