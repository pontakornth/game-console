import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router/match";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <Link href="/game">Game</Link>
            <Link href="/controller">Controller</Link>
        </div>
    );
};

export default Home;
