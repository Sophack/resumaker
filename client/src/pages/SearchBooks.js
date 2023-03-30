import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";

import Auth from "../utils/auth";
import { SAVE_BOOK } from "../utils/mutations";
import { GET_ME, GET_RESUME } from "../utils/queries";
import { searchGoogleBooks } from "../utils/API";
import { saveBookIds, getSavedBookIds } from "../utils/localStorage";

const SearchBooks = () => {
  // create state for holding returned google api data
  const [searchedBooks, setSearchedBooks] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const [saveBook] = useMutation(SAVE_BOOK);

  // create state to hold saved bookId values
  const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  const { loading, data } = useQuery(GET_RESUME);
  let resumeData = data?.getResume || {};

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveBookIds(savedBookIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  // create function to handle saving a book to our database
  const handleSaveBook = async (bookId) => {
    // find the book in `searchedBooks` state by the matching id
    const bookToSave = searchedBooks.find((book) => book.bookId === bookId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveBook({
        variables: { bookData: { ...bookToSave } },
      });

      if (!response) {
        throw new Error("error occoured");
      }

      setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  if (resumeData) {
    return (
      <>
        <div style={{ marginTop: "60px" }}>
          <h1>`{resumeData.__typename}`</h1>
          <p>{resumeData.color}</p>
          <p>{resumeData.education[0].__typename}</p>
          <ul>
            <li>{resumeData.education[0].school}</li>
            <li>{resumeData.education[0].program}</li>
            <li>{resumeData.education[0].start}</li>
            <li>{resumeData.education[0].end}</li>
          </ul>
          <p>{resumeData.work[0].__typename}</p>
          <ul>
            <li>{resumeData.work[0].company}</li>
            <li>{resumeData.work[0].role}</li>
            <li>{resumeData.work[0].duties}</li>
            <li>{resumeData.work[0].start}</li>
            <li>{resumeData.work[0].end}</li>
          </ul>
          {console.log(
            JSON.stringify(resumeData.work[0]) + " is this working?"
          )}
        </div>
      </>
    );
  }
};

export default SearchBooks;
