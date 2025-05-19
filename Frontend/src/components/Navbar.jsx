import React from "react";
import {
  ChatBubbleOvalLeftEllipsisIcon, // or EnvelopeIcon
  CalendarIcon, // or CalendarDaysIcon
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline"; // or /24/solid for the solid versions

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow flex justify-between items-center px-4 py-6">
      <div className="flex items-center gap-4">
        <h2 className="border-r border-gray-300  text-lg px-3">Home</h2>
        <h2 className="border-r border-gray-300  text-lg px-3">About </h2>
        <h2 className="border-r border-gray-300  text-lg px-3">Contact</h2>
        <h2 className=" text-lg px-3">Services</h2>
      </div>
      <div className=" flex-grow flex justify-center ">
        <span className="text-xl font-semibold"> EVOLYTE</span>
      </div>
      <div className="flex items-center gap-6">
        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 " />
        <CalendarIcon className="h-6 w-6 " />
        <BellIcon className="h-6 w-6 " />
        <ChevronDownIcon className="h-6 w-6 " />
      </div>
    </div>
  );
}
