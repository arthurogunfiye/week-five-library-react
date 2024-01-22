import Book from "./ui/Book";
import { books } from "../data";

const Featured = () => {
  return (
    <section id="featured">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter(book => book.rating === 5)
              .slice(0, 4) // Get the first 4 books with 5-star rating
              .map(book => (
                <Book key={book.id} book={book} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
