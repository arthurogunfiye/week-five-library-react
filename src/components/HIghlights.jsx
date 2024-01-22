import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlights__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              subtitle="Easy and Quick"
              paragraph="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              subtitle="10,000+ Books"
              paragraph="Library has books in all your favourite categories."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              subtitle="Affordable"
              paragraph="Get your hands on popular books for as little as £10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
