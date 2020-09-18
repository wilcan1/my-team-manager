import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
// import TeamDetails from './components/TeamDetails';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>        
                <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
