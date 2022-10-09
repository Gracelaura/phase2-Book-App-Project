import React, { useState, useEffect } from "react";
import "../App"
import { useNavigate, useParams } from "react-router-dom"


function BookDetails() {
    const [book, setBook] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()



    useEffect(() => {
        fetch(`https://midnight-api.herokuapp.com/books/${id}`)
            .then(resp => resp.json())
            .then(result => setBook(result))
    }, [id])
    // console.log(res);

    function handleBtnClick() {
        navigate(-1)
    }
    return (
        <>
            <div className="back-btn">
                <button className="btn" onClick={handleBtnClick}>BACK</button>
            </div>
            <div className="book-details">

                <div className="book-image">
                    <h2>{book.title}</h2>
                    <img src={book?.image_url} alt="#" />
                </div>
                <div className="book-description">
                    <h2>Description</h2>
                    <p>{book?.description}</p>
                    <h2>Authors</h2>
                    <p>{book?.authors}</p>
                    <h2>Genres</h2>
                    <p>{book?.genres}</p>
                </div>
            </div>
        </>
    )





}

export default BookDetails