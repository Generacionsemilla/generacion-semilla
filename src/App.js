import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import i18n from "./translations/i18n";
import About from "./pages/about";
import Products from "./pages/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from "./pages/product_detail";

function App() {

    return (
        <Router>

                <div className="App">
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route exact path='/products' component={Products}></Route>
                        <Route path='/products/:productName' component={ProductDetail}></Route>
                        <Route exact path='/contact' component={Contact}></Route>
                        <Route exact path='/about' component={About}></Route>
                    </Switch>
                </div>

        </Router>

    );
}

export default App;
