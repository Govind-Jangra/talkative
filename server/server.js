import express from "express";
import dotenv from "dotenv";
import dbConfig from "./config/db.js";
import usersRoute from "./routes/usersRoute.js";
import chatsRoute from "./routes/chatsRoute.js";
import messagesRoute from "./routes/messagesRoute.js";
import http from "http";
import { Server } from "socket.io";
import path from "path";

const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.use(express.json({ limit: "50mb" }));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let onlineUsers = [];

io.on("connection", (socket) => {
  socket.on("join-room", (userId) => {
    socket.join(userId);
  });

  socket.on("send-message", (message) => {
    io.to(message.members[0])
      .to(message.members[1])
      .emit("receive-message", message);
  });

  socket.on("clear-unread-messages", (data) => {
    io.to(data.members[0])
      .to(data.members[1])
      .emit("unread-messages-cleared", data);
  });

  socket.on("typing", (data) => {
    io.to(data.members[0]).to(data.members[1]).emit("started-typing", data);
  });

  socket.on("came-online", (userId) => {
    if (!onlineUsers.includes(userId)) {
      onlineUsers.push(userId);
    }

    io.emit("online-users-updated", onlineUsers);
  });

  socket.on("went-offline", (userId) => {
    onlineUsers = onlineUsers.filter((user) => user !== userId);
    io.emit("online-users-updated", onlineUsers);
  });
});

app.use("/api/users", usersRoute);
app.use("/api/chats", chatsRoute);
app.use("/api/messages", messagesRoute);



server.listen(port, () => console.log(`Server running on port ${port}`));
