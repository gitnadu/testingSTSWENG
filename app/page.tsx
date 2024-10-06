import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center mt-14">

      <div className="p-10 bg-normal-green rounded-lg shadow-lg w-[758px] h-[561px] px-20">
        <h2 className="mb-14 mt-2 text-4xl font-bold text-center text-white">
          Welcome!
        </h2>
        <form className="text-xl relative h-full">
          <div className="mb-8">
            <label className="block mb-2 text-white">Username</label>
            <input
              type="text"
              className="w-full p-2 text-white bg-transparent placeholder-gray-300 rounded outline-none focus:ring-2 border-white border-[1px] h-[56px]"
              placeholder="Enter your username"/>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-white">Password</label>
            <input
              type="password"
              className="w-full p-2 text-white placeholder-gray-300 bg-transparent rounded outline-none focus:ring-2 border-[1px] border-white h-[56px]"
              placeholder="Enter your password"/>
          </div>
          <button
            type="submit"
            className="w-[169px] h-[34px] text-center text-white font-bold bg-light-green text-xl rounded-xl hover:bg-[#c4b25a] transition absolute bottom-28 right-0">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
