import React, { useState, useEffect } from "react";
import "../App"
// import { useAppContext } from "./Context/appContext"
import {useNavigate} from "react-router-dom"



function BookList({addBookToFav}) {
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    const [isClicked, setIsClicked] = useState(false)

    // const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

    // const navigate = useNavigate()

    // function favoritesChecker(id) {
    //     const boolean = favorites.some((book) => book.id === id)
    //     return boolean
    // }

const  handleBookDisplay = (book)=>{
    navigate(`/book/${book.id}`)
}

function handleMyFavourites (book){
    addBookToFav(book);
    setIsClicked(!isClicked)

}
    useEffect(() => {
        fetch("http://localhost:8000/books")
            .then(resp => resp.json())
            .then(result => setBooks(result))
    }, [])

    return (
        <>
            <div className="book-list">
                {books.map((book) => {
                    return (
                        <div key={book.id} className="book" >
                            <h4>{book.title}</h4>
                            <div>
                                <img src={book.image_url} alt="#" onClick={()=>{
                            handleBookDisplay(book)
                        }} />
                            </div>
                            <div>
                                <button onClick={()=>handleMyFavourites(book)}>{isClicked?'remove from favorites':'Add to Favorites'}</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )

}

export default BookList