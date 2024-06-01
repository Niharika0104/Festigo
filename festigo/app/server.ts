
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

io.on('connection', async (socket: any) => {
    console.log('a user connected');

    // Add user
    socket.on("add-user", (userId: string) => {
        // if not added
        if (!activeUsers.some((user: any) => user.userId === userId)) {
            activeUsers.push(
                {
                    userId,
                    socketId: socket.id
                }
            );
        }
        io.emit("get-active-users", activeUsers);
    });

    // Send Message
    socket.on("send-message", (data: any) => {
        const { receiverId: userId } = data;

        console.log("rec: ", userId)
        const user = activeUsers.find((user: any) => user.userId === userId);

        if (user) {
            console.log("bheja")
            io.to(user.socketId).emit("recieve-message", data)
        }
    });

    // Disconnect User
    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user: any) => user.socketId !== socket.id);
        io.emit("get-active-users", activeUsers);
    });

});

server.listen(3001, () => {
    console.log('listening on *:3001');
});
