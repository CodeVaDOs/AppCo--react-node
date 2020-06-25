import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import UserPage from "./pages/UserPage/UserPage"
import ListUsersPage from "./pages/ListUsersPage/ListUsersPage";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
<Router>
    <Switch>
        <Route path="/" exact>
            <App />
        </Route>
        <Route path="/listuserspage" exact>
            <ListUsersPage />
        </Route>
        <Route path="/listuserspage/userpage">
            <UserPage />
        </Route>
    </Switch>
</Router>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
