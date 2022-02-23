import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContext from "./Context/CartContext";
import Footer from './components/Footer/footer';


function App() {
  return (
      <CartContext>
        <BrowserRouter>
          <div className="App">
            <NavBar />
              <Switch>
              <Route exact path="/">    <ItemListContainer />     </Route>

              <Route path="/category/:categoryId"> <ItemListContainer />      </Route>

              <Route path="/detalle/:itemId">  <ItemDetailContainer />     </Route>

              
              <Route path="/cart"> <Cart /> </Route>
            </Switch>
          </div>
            <Footer/>
        </BrowserRouter>
      </CartContext>
  );
}

export default App;
