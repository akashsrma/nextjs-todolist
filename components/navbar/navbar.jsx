import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100  shadow-md">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Akash<span className="text-gray-500">Srma</span>
        </a>
      </div>
      <div className="mr-4 mt-5 font-medium text-gray-400 hover:text-gray-600">
        <button>SIGN-OUT</button>
      </div>
      <div className="flex-none">
        <img src="/natural.jpg" width={80} className="rounded-lg" />
      </div>
    </div>
  );
};

export default Navbar;
