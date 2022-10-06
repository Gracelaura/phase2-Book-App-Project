import React, {useState, useEffect} from "react";
import "../App"


function BookList() {
    const[books, setBooks] = useState([])
    
    

    function fetchData() {
        fetch("http://localhost:8000/books")
        .then(resp=>resp.json())
        .then(result=>setBooks(result))
    }

    useEffect(() => {
       fetchData() 
    }, [])


    return <div className="book-list">
        {books.map((book) =>(
            <div key={book.id} className="book" >
                <div>
                    <h4>{book.title}</h4>
                </div>
                <div>
                    <img src={book.image_url} alt="#" />
                </div>
                <div>
                    <button>Add to Favorites</button>
                </div>
            </div>
        ))}
    </div>

        
    
        
    
}

export default BookList