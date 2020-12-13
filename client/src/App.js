import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { isLogin } from "./services/auth";

import Connection from "./components/main/connection/Connection";
import Register from "./components/main/register/Register";
import Home from "./components/main/home/Home";
import HomeCodeName from "./components/codename/home/HomeCodeName";
import GameCodeName from "./components/codename/game/GameCodeName";

import "./App.css";

function App() {
  if (isLogin()) {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/codename/game/:idGame" component={GameCodeName} />
            <Route path="/codename" component={HomeCodeName} />
            <Route path="/signup" component={Register} />
            <Route path="/signin" component={Connection} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/signin">
              <Connection />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
