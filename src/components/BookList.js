import React, { useState, useEffect } from "react";
import "../App"
// import { useAppContext } from "./Context/appContext"
import {useNavigate} from "react-router-dom"



function BookList({addBookToFav}) {
    const [books, setBooks] = useState([])
    const navigate = useNavigate()
    // const [isClicked, setIsClicked] = useState(false)
    const [selectedBook, setSelectedBook] = useState([])


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
    if(selectedBook.some(elem=>elem.book ===book)){
        setSelectedBook(selectedBook=>selectedBook.filter(books=>books!==book))
    }
    else{
        const myFilteredBooks = selectedBook.filter(books=>books!==book)
        setSelectedBook([...myFilteredBooks,{book,isClicked:true}])
        addBookToFav(book);
    }
  
    // setIsClicked(!isClicked)

}
    useEffect(() => {
        fetch("https://midnight-api.herokuapp.com/books")
            .then(resp => resp.json())
            .then(result => setBooks(result))
    }, [])
    console.log(selectedBook);

    return (
        <>
            <div className="book-list">
                {books.map((book) => {
                    const className =(selectedBook.some(elem=>elem.book ===book))?'Remove from favorites':'Add to favorites'
    // console.log(selectedBook.some(elem=>elem.book ===book));

                    return (
                        <div key={book.id} className="book" >
                            <h4>{book.title}</h4>
                            <div>
                                <img src={book.image_url} alt="#" onClick={()=>{
                            handleBookDisplay(book)
                        }} />
                            </div>
                            <div>
                                <button onClick={()=>handleMyFavourites(book)}>{className}</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )

}

export default BookList