import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import i18n from "./translations/i18n";
import About from "./pages/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Products from "./pages/products";

function App() {

  return (
      <Router>
          <Header></Header>
          <div className="App">
              <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Route exact path='/products' component={Products}></Route>
                  <Route exact path='/contact' component={Contact}></Route>
                  <Route exact path='/about' component={About}></Route>
              </Switch>
          </div>
          <Footer></Footer>

      </Router>
  );
}

export default App;
