"use client";
import Login from "@/components/login/login";
const Log = () => {
  return (
    <div>
      {/* <div className="navbar bg-green-800  shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-orange-400">
            Welcome<span className="text-white">Developer</span>
          </a>
        </div>

        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current text-white"
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
      </div> */}
      <Login />
    </div>
  );
};

export default Log;
