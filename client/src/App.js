import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/main/home/Home";
import Rules from "./components/codename/rules/Rules";
import Table from "./components/codename/table/Table";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/codename/rules">
            <Rules />
          </Route>
          <Route path="/codename/">
            <Table />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
