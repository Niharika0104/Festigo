const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

let activeUsers: any = [];

io.on('connection', (socket: any) => {

    // Add user
    socket.on("add-user", (userId: string) => {
        if (!activeUsers.some((user: any) => user.userId === userId)) {
            activeUsers.push({ userId, socketId: socket.id });
        }
        io.emit("get-active-users", activeUsers);
        console.log('User added:', userId, socket.id);
    });

    // Send Message
    socket.on("send-message", (data: any) => {
        const { receiverId } = data;
        const user = activeUsers.find((user: any) => user.userId === receiverId);

        if (user) {
            io.to(user.socketId).emit("recieve-message", data);
        } else {
            console.log('User not found:', receiverId);
        }
    });

    // Disconnect User
    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user: any) => user.socketId !== socket.id);
        io.emit("get-active-users", activeUsers);
    });
});

server.listen(3001, () => {
    console.log('Listening on *:3001');
});
