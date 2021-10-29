import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import i18n from "./translations/i18n";
import About from "./pages/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Products from "./pages/products";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";

function App() {

    return (
        <Router>
            <Container fluid>
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
            </Container>
        </Router>

    );
}

export default App;
