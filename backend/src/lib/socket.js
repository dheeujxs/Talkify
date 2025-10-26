import { io } from "socket.io-client";

export const socket = io("https://talkify-bfa4.onrender.com", {
  withCredentials: true, // ✅ send JWT cookie for auth
});

socket.on("connect", () => {
  console.log("Connected to Socket.IO server:", socket.id);
});

socket.on("getOnlineUsers", (users) => {
  console.log("Online users:", users);
});

socket.on("disconnect", () => {
  console.log("Disconnected from Socket.IO server");
});
