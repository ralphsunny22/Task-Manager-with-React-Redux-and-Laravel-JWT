import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layouts/Header";
import Projects from "./projects/Projects";
import AddProject from "./projects/AddProject";
import SingleProject from "./projects/SingleProject";
import Register from "./auth/Register";
import Login from "./auth/Login";
import NotFound from "./pages/NotFound";

import { Provider } from "react-redux";

import store from "../store";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadUser } from "../actions/authActions";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Projects} />

                    <Route exact path="/login" component={Login} />

                    <Route exact path="/register" component={Register} />

                    <Route exact path="/addProject" component={AddProject} />

                    <Route
                        exact
                        path="/project/:slug"
                        component={SingleProject}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("app")
    );
}
