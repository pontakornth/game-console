import { h, FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { io, Socket } from "socket.io-client";
import useHold from "../../utils/useHold";

// I don't know if there is a better way to do this but I hope there is
let socket: Socket;

const Controller: FunctionalComponent = () => {
    const intervalSet = useRef<NodeJS.Timeout>();
    useEffect(() => {
        socket = io("http://localhost:4000");
    });
    const [handleClick, handleUnclick] = useHold(
        () => socket.emit("left"),
        intervalSet,
        10
    );
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
