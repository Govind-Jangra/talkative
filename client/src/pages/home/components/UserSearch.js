import React from "react";

function UserSearch({searchKey , setSearchKey}) {
  
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search users / chats"
        className="rounded-xl w-full border-gray-300 pl-10  bg-slate-100 text-black h-14"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <i className="ri-search-line absolute top-4 left-4 text-black"></i>
    </div>
  );
}

export default UserSearch;
