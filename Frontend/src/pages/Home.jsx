import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

export default function Home() {
  return (
    <div
      className="text-white h-[100vh] flex justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div>
        <Navbar />
        <Login />
      </div>
    </div>
  );
}
