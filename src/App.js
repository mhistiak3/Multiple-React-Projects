import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Home from "./component/pages/Home";
import NotFound from "./component/pages/NotFound";
import AddUser from "./component/users/AddUser";
import EditUser from "./component/users/EditUser";
import ViweUser from "./component/users/ViweUser";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/add" component={AddUser} />
        <Route exact path="/user/edit/:id" component={EditUser} />
        <Route exact path="/user/viwe/:id" component={ViweUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
