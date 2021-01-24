import { h, FunctionalComponent } from "preact";
import { useEffect } from "preact/hooks";
import { io, Socket } from "socket.io-client";

// I don't know if there is a better way to do this but I hope there is
let socket: Socket;

const Controller: FunctionalComponent = () => {
    useEffect(() => {
        socket = io("http://localhost:4000");
    });
    useEffect(() => {
        socket.on("left", () => {
            console.log("left");
        });
    }, []);
    const handleClick = () => {
        socket.emit("left");
    };
    return (
        <div class="controller">
            <button onClick={handleClick}>Left</button>
            <p>This is controller</p>
        </div>
    );
};

export default Controller;
