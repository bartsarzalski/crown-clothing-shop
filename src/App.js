import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sing-in-and-sign-up/sign-in-and-sign-up';

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
