import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header'

function App() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <h1>App Page</h1>
          </div>
        </BrowserRouter>
      )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
