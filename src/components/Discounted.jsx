import { books } from "../data";
import Book from "./ui/Book";

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter(book => book.salePrice > 0) // Get books with a sale price
              .slice(0, 8) // Get the first 8 books with a sale price
              .map(book => (
                <Book book={book} key={book.id} /> // Convert to HTML
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
