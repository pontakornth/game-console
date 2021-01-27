import { h, FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import * as style from "./style.css";
import { io, Socket } from "socket.io-client";
import useHold from "../../utils/useHold";

// I don't know if there is a better way to do this but I hope there is
let socket: Socket;

const Controller: FunctionalComponent = () => {
    const intervalSet = useRef<NodeJS.Timeout>();
    useEffect(() => {
        socket = io("http://localhost:4000");
    });
    const [handleClickLeft, handleUnclickLeft] = useHold(
        () => socket.emit("left"),
        intervalSet,
        10
    );
    const [handleClickRight, handleUnclickRight] = useHold(
        () => socket.emit("right"),
        intervalSet,
        10
    );
    const [handleClickDown, handleUnclickDown] = useHold(
        () => socket.emit("down"),
        intervalSet,
        10
    );
    const [handleClickUp, handleUnclickUp] = useHold(
        () => socket.emit("up"),
        intervalSet,
        10
    );
    return (
        <div class={style.page}>
            <div class={style.gamePad}>
                <button
                    onMouseUp={handleUnclickLeft}
                    class={style.leftButton}
                    onMouseDown={handleClickLeft}
                >
                    Left
                </button>
                <button
                    onMouseUp={handleUnclickRight}
                    onMouseDown={handleClickRight}
                    class={style.rightButton}
                >
                    Right
                </button>
                <button
                    onMouseUp={handleUnclickDown}
                    class={style.downButton}
                    onMouseDown={handleClickDown}
                >
                    Down
                </button>
                <button
                    onMouseUp={handleUnclickUp}
                    class={style.upButton}
                    onMouseDown={handleClickUp}
                >
                    Up
                </button>
            </div>
        </div>
    );
};

export default Controller;
