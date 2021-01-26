import express from 'express';
import socketio from "socket.io";
import * as http from "http";
import cors from "cors";

const app = express();
app.use(cors());
const server = http.createServer(app);
const io: socketio.Server  = (socketio as any)(server, {
	cors: {
		origin: '*',
	}
});

app.get('/', (req: express.Request, res: express.Response) => {
	res.send("Hello, world\n");
})

io.on("connection", (socket: socketio.Socket) => {
	console.log("Connected")
	socket.on("left", () => {
		console.log("Left")
		socket.broadcast.emit("left")
	})
	socket.on("right", () => {
		console.log("Right")
		socket.broadcast.emit("right")
	})
	socket.on("down", () => {
		console.log("Down")
		socket.broadcast.emit("down")
	})

	socket.on("up", () => {
		console.log("Up")
		socket.broadcast.emit("up")
	})

})

server.listen(4000, () => {
	console.log("Listening on 4000")
})

