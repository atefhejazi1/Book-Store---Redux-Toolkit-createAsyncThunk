import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBook } from "../../Store/bookSlice";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";

const PostContainer = () => {
  const { books, isLoading } = useSelector((state) => state.book);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const [selectedBook, setSelectedBook] = useState({});
  const getBookId = (id) => {
    const selectedBook = books.find((item) => item.id === id);
    setSelectedBook((prev) => {
      return { ...prev, ...selectedBook };
    });
  };

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLoggedIn={isLoggedIn}
            deleteBook={deleteBook}
            dispatch={dispatch}
            getBookId={getBookId}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
