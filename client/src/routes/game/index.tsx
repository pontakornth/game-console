import { h, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { io, Socket } from "socket.io-client";

// Please open PR for refactor
let socket: Socket;

const Game: FunctionalComponent = () => {
    // Should I use reducer instead?
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0
    });
    useEffect(() => {
        socket = io("http://localhost:4000");
    }, []);
    useEffect(() => {
        socket.on("left", () => {
            setPosition(pos => ({ ...pos, x: pos.x - 12 }));
        });
        socket.on("right", () => {
            setPosition(pos => ({ ...pos, x: pos.x + 12 }));
        });
        socket.on("up", () => {
            setPosition(pos => ({ ...pos, y: pos.y + 12 }));
        });
        socket.on("down", () => {
            setPosition(pos => ({ ...pos, y: pos.y - 12 }));
        });
    }, []);
    return (
        <div class="game">
            <div
                style={{
                    height: "34px",
                    width: "34px",
                    margin: "auto",
                    background: "red",
                    transform: `translateX(${position.x}px) translateY(${position.y}px)`
                }}
            ></div>
        </div>
    );
};

export default Game;
