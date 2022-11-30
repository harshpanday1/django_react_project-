import './App.css';
import AddProduct from './components/AddProduct';
import ShowProducts from './components/ShowProducts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBarMenu/>
        <Switch>
          <Route exact path="/" component={ShowProducts}/>
          <Route exact path="/addProduct" component={AddProduct}/>
          <Route exact path="/:id/" component={ProductDetail}/>
          <Route exact path="/:id/update" component={UpdateProduct}/>
        </Switch>
      </Router>
      
   
    </div>
  );
}

export default App;
