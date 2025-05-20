import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <Navbar />
    </div>
  );
}
