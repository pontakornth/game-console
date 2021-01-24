import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";
import NotFoundPage from "../routes/notfound";
import Game from "../routes/game";
import Controller from "../routes/controller";
import Header from "./header";

const App: FunctionalComponent = () => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="app">
            <Router onChange={handleRoute}>
                <Route path="/" component={Home} />
                <Route path="/game" component={Game} />
                <Route path="/controller" component={Controller} />
                <NotFoundPage default />
            </Router>
        </div>
    );
};

export default App;
