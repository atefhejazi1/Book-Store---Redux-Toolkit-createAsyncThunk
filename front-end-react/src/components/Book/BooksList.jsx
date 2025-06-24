import React from "react";

const BooksList = ({ isLoading, books }) => {
  console.log(books);

  const bookList =
    books.length > 0
      ? books.map((item) => {
          return (
            <li
              className="list-group-item d-flex  justify-content-between align-items-center"
              key={item.id}
            >
              <div>{item.title}</div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">
                  Read
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </li>
          );
        })
      : "There No Books Available ";

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading ...." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
