import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./layouts/Header";
import Projects from "./projects/Projects";
import AddProject from "./projects/AddProject";
import SingleProject from "./projects/SingleProject";

import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../store22";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <div>
                        <Header />

                        <Switch>
                            <Route exact path="/" component={Projects} />

                            <Route
                                exact
                                path="/addProject"
                                component={AddProject}
                            />

                            <Route
                                exact
                                path="/project/:slug"
                                component={SingleProject}
                            />
                        </Switch>
                    </div>
                </PersistGate>
            </BrowserRouter>
        </Provider>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
