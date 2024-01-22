import Rating from "../components/Rating";
import emptyCartImage from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQuantity, removeItemFromCart }) => {
  const total = () => {
    let price = 0;
    cart.forEach(item => {
      price += +(item.salePrice || item.originalPrice) * item.quantity;
    });
    return price;
  };

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>
              <div className="cart__body">
                {cart.map(book => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt={book.title}
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <div className="cart__book--rating">
                            <Rating rating={book.rating} />
                          </div>
                          <span className="cart__book--price">
                            £{(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItemFromCart(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={book.quantity}
                          onChange={event =>
                            updateQuantity(book, event.target.value)
                          }
                        />
                      </div>
                      <div className="cart__total">
                        £
                        {(
                          book.quantity * (book.salePrice || book.originalPrice)
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div>
                {cart.length === 0 && (
                  <div className="cart__empty">
                    <img
                      src={emptyCartImage}
                      alt=""
                      className="cart__empty--img"
                    />
                    <h2>You do not have any books in your cart!</h2>
                    <Link to="/books">
                      <button className="btn">Browser Books</button>
                    </Link>
                  </div>
                )}
              </div>
              <div>
                {cart.length > 0 && (
                  <div className="total">
                    <div className="total__item total__sub-total">
                      <span>Subtotal</span>
                      <span>£{(total() * 0.9).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__tax">
                      <span>Tax</span>
                      <span>£{(total() * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="total__item total__price">
                      <span>Total</span>
                      <span>£{total().toFixed(2)}</span>
                    </div>
                    <button
                      className="btn btn__checkout no-cursor"
                      onClick={() => alert("TODO: Not yet implemented :(")}
                    >
                      Proceed to checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
