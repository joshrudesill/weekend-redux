import React from "react";
import axios from "axios";
import "./App.css";
import { HashRouter, Link, Route } from "react-router-dom/cjs/react-router-dom";
import Feedback from "./Feedback";
import Review from "./Review";
import Comments from "./Comments";
import Success from "./Success";

function App() {
  return (
    <HashRouter>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route exact path='/'>
          <Feedback
            message='How are you feeling today?'
            inputMessage='feeling'
          />
          <Link to='/understanding' data-testid='next'>
            Next
          </Link>
        </Route>
        <Route path='/understanding'>
          <Feedback
            message='How are you understanding today?'
            inputMessage='understanding'
          />
          <Link to='/support' data-testid='next'>
            Next
          </Link>
        </Route>
        <Route path='/support'>
          <Feedback
            message='How well are you being supported today?'
            inputMessage='support'
          />
          <Link to='/comments' data-testid='next'>
            Next
          </Link>
        </Route>
        <Route path='/comments'>
          <Comments />
          <Link to='/review' data-testid='next'>
            Next
          </Link>
        </Route>
        <Route path='/review'>
          <Review />
        </Route>
        <Route path='/success'>
          <Success />
        </Route>
      </div>
    </HashRouter>
  );
}

export default App;
