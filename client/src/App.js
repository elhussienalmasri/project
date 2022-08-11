import Home from "./pages/home/Home";

import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Port from "./pages/port/port"
import Footer from "./components/Footer/Footer";
import Navbar from "./components/nav/Navbar"



function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          < Port />
        </Route>
       
        <Route path="/blog/regmh*159"><Register /></Route>
        <Route path="/blog/logmh*159"> <Login /></Route>
        <Route path="/blog/write">{user ? <Write /> : <Home /> }</Route>
        <Route path="/blog/settings">{user ? <Settings /> : <Home /> }</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
