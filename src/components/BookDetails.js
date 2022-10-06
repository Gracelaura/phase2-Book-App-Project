import React, { useState, useEffect } from "react";
import "../App"
import { useParams } from "react-router-dom"


function BookDetails() {
    const [book, setBook] = useState({})
    const { id } = useParams()

    function fetchData() {
        fetch("http://localhost:8000/books/${id}")
            .then(resp => resp.json())
            .then(result => setBook(result))
    }

    useEffect(() => {
        fetchData()
    }, [id])



    return
    <div className="book-details">
        <div className="book-image">
            <h2>{book?.title}</h2>
            <img src={book?.image_url} alt="#" />
        </div>
        <div className="book-poster">
            <h2>Description</h2>
            <p>{book?.description}</p>
            <h2>Authors</h2>
            <p>{book?.authors}</p>
            <h2>Genres</h2>
            <p>{book?.genres}</p>
        </div>
    </div>





}

export default BookDetails