import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'react-dropdown/style.css';

import GlobalStyle from "./globalStyles";


import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ComingSoon from './pages/ComingSoon';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/waiting-list" /> }/>
        <Route exact path="/waiting-list" component={ComingSoon} />
        <Route path="*" render={() => <Redirect to="/waiting-list" /> }/>
        {/* <Route exact path="/"> {loggedIn ? <Redirect to="/dashboard" /> : <Home />}</Route>
        <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>

      <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    </Router>
  );
};

export default App;
