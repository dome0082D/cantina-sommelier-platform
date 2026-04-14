import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CantinaListPage from './pages/CantinaListPage';
import SommelierListPage from './pages/SommelierListPage';
import ChatPage from './pages/ChatPage';
import EventsPage from './pages/EventsPage';
import WinesPage from './pages/WinesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/cantina-list' component={CantinaListPage} />
        <Route path='/sommelier-list' component={SommelierListPage} />
        <Route path='/chat' component={ChatPage} />
        <Route path='/events' component={EventsPage} />
        <Route path='/wines' component={WinesPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/settings' component={SettingsPage} />
      </Switch>
    </Router>
  );
};

export default App;
