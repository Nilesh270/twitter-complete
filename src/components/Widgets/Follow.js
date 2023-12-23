import React from "react";

const Follow = ({ user }) => {
    
  return (
    <div className="flex items-center px-4 py-2  cursor-pointer hover:bg-gray-200 transition duration-500 ease-out">
      <img className="rounded-full h-12 w-12" src={user.picture.medium}></img>

      <div className="truncate ml-4 leading-5 ">
        <h4 className="font-bold hover:underline text-[14px] truncate">{`${user.name.first} ${user.name.last}`}</h4>
        <h5 className="text-[13px] text-gray-500 truncate">
          {user.login.username}
        </h5>
      </div>

      <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
        Follow
      </button>
    </div>
  );
};

export default Follow;
