import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './layouts/Header'
import Projects from './projects/Projects'

import { Provider } from 'react-redux';
import store  from '../store'

function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Projects />
          </div>
        </BrowserRouter>
      </Provider>
      )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
