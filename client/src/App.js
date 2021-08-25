import "./App.css";
import Assets from "./screens/Assets";
import Sidebar from "./components/sidebar/SideBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Sidebar />
          <div className="dashboard">
            <Switch>
              <Route exact path="/">
                <Assets />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
