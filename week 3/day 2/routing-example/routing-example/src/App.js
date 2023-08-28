import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function Home() {
  return <h1>Welcome</h1>;
}

function NumberPage({ match }) {
  const { num } = match.params;
  return <h1>{num}</h1>;
}

function WordPage({ match }) {
  const { word } = match.params;
  return <h1>{word}</h1>;
}

function ColoredWordPage({ match }) {
  const { word, textColor, bgColor } = match.params;
  const textStyle = { color: textColor, backgroundColor: bgColor };
  return <h1 style={textStyle}>{word}</h1>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/4">Number 4</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/hello/blue/red">Colored Hello</Link></li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/:num" component={NumberPage} />
          <Route path="/:word" component={WordPage} />
          <Route path="/:word/:textColor/:bgColor" component={ColoredWordPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
