import { h, FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { io, Socket } from "socket.io-client";

// I don't know if there is a better way to do this but I hope there is
let socket: Socket;

const Controller: FunctionalComponent = () => {
    const intervalSet = useRef<NodeJS.Timeout>();
    useEffect(() => {
        socket = io("http://localhost:4000");
    });
    const handleClick = () => {
        intervalSet.current = setInterval(() => {
            socket.emit("left");
        }, 500);
    };
    const handleUnclick = () => {
        clearInterval(intervalSet.current);
    };
    return (
        <div class="controller">
            <button onMouseUp={handleUnclick} onMouseDown={handleClick}>
                Left
            </button>
            <p>This is controller</p>
        </div>
    );
};

export default Controller;
