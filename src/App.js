import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Layout from './components/layout';

import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Account from './components/account/account';
import Shop from './components/shop/shop';

import history from './history';

import './styles/main.scss';

function App() {
  return (
    <div>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup'  component={SignUp} />
            <Route path='/account' component={Account} />
            <Route path='/shop' component={Shop} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
