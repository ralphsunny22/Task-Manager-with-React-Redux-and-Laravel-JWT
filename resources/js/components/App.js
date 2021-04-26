import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header'
import Projects from './projects/Projects'

function App() {
    return (
        <BrowserRouter>
          <div>
            <Header />
            <Projects />
          </div>
        </BrowserRouter>
      )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
