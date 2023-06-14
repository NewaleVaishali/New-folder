
import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import ContextConnector from "./config/connector";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./Pages/Home";
import Items from "./Pages/Items";
import Categories from "./Pages/Categories";
import Stores from "./Pages/Stores";


function App() {
  return (
    <ContextConnector>
      <Router>
        <div>
        <Navbar />
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/stores" component={Stores} />
          </Container>
        </Switch>
        </div>
      </Router>
    </ContextConnector>
  );
}


export default App;
