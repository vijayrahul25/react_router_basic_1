import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/About'}>About</Link></li>
          </ul>
          <hr />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;