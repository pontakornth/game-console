import * as express from 'express';
import * as socketio from "socket.io";
import * as http from "http";

const app = express();
const server = http.createServer(app);
const io: socketio.Server  = (socketio as any)(server);

app.get('/', (req, res) => {
	res.send("Hello, world\n");
})

io.on("connection", (socket: socketio.Socket) => {
	console.log("Connected")
	socket.on("left", () => {
		socket.broadcast.emit("left")
	})
	socket.on("right", () => {
		socket.broadcast.emit("right")
	})
})

server.listen(4000, () => {
	console.log("Listening on 4000")
})

