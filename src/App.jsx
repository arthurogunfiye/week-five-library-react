import Books from "./pages/Books";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function updateQuantity(book, quantity) {
    setCart(
      cart.map(item =>
        item.id === book.id ? { ...item, quantity: +quantity } : item
      )
    );
  }

  function removeItemFromCart(item) {
    setCart(cart.filter(book => +book.id !== +item.id));
  }

  function numberOfItemsInCart() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    });
    return counter;
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItemsInCart={numberOfItemsInCart()} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                updateQuantity={updateQuantity}
                removeItemFromCart={removeItemFromCart}
              />
            }
          />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Stopped at 2:25:40
