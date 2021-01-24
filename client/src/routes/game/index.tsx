import { h, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { io, Socket } from "socket.io-client";

// Please open PR for refactor
let socket: Socket;

const Game: FunctionalComponent = () => {
    const [position, setPosition] = useState<number>(1800);
    useEffect(() => {
        socket = io("http://localhost:4000");
    }, []);
    useEffect(() => {
        socket.on("left", () => {
            setPosition(pos => pos - 80);
        });
    }, []);
    return (
        <div class="game">
            <div
                style={{
                    height: "34px",
                    width: "34px",
                    background: "red",
                    position: "absolute",
                    left: `${position}px`
                }}
            ></div>
        </div>
    );
};

export default Game;
