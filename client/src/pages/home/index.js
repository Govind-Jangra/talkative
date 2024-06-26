import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatArea from "./components/ChatArea";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";
import { io } from "socket.io-client";
import talkative from "./talkative.png"
const socket = io('');
function Home() {
  const [searchKey, setSearchKey] = React.useState("");
  const { selectedChat, user } = useSelector((state) => state.userReducer);
  const [onlineUsers, setOnlineUsers] = React.useState([]);
  useEffect(() => {
    // join the room
    if (user) {
      socket.emit("join-room", user._id);
      socket.emit("came-online", user._id);

      socket.on("online-users-updated", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [user]);

  return (
    <div className="flex gap-5">
      {/* 1st part   user search , userslist/chatlist */}
      <div className="w-96 bg-black ">
        <UserSearch searchKey={searchKey} setSearchKey={setSearchKey} />
        <UsersList
          searchKey={searchKey}
          socket={socket}
          onlineUsers={onlineUsers}
        />
      </div>

      {/* 2nd part   chatbox */}
      {selectedChat && (
        <div className="w-full" >
          <ChatArea socket={socket} />
        </div>
      )}

      {!selectedChat && (
        <div className="w-full h-[80vh]  items-center justify-center flex bg-white flex-col">
          <img
            src={talkative}
            alt=""
            
            style={{ width: "50%", height: "auto" }}

          />
          <h1 className="text-2xl font-semibold text-gray-500">
            Select a chat or search a User
          </h1>
        </div>
      )}
    </div>
  );
}

export default Home;
