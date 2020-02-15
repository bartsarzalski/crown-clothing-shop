import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

/* const HatsPage = () => (
  <div>
      <h1>Hats page</h1>
  </div>
);

const TopicDetail = props => {
  console.log(props);

  return (
    <div>
      <h1>TOPIC DETAILS: {props.match.params.topicId}</h1>
    </div>
  );
} */

function App() {
  //<Route exact path='/topic/:topicId' component={TopicDetail} />
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
