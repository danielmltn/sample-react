import React from 'react'
import logo from './logo.svg'
import './App.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import EditorContainer from './editor/EditorContainer'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/editor">Editor</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/editor">
              <EditorContainer />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
