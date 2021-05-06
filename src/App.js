import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';

const MainPage = lazy(() =>
  import('./pages/MainPage' /* webpackChunkName: "main-page" */),
);
const ListPage = lazy(() =>
  import('./pages/ListPage' /* webpackChunkName: "list-page" */),
);
const UserPage = lazy(() =>
  import('./pages/UserPage' /* webpackChunkName: "user-page" */),
);

function App() {
  const [userId, setUserId] = React.useState(null);

  return (
    <Suspense fallback="Loading...">
      <NavBar />
      <Switch>
        <Route exact path={'/'}>
          <MainPage />
        </Route>
        <Route path={'/list'}>
          <ListPage />
        </Route>
        <Route path={'/user'}>
          <UserPage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
