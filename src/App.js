import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { Navbar, Footer } from "./components";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
