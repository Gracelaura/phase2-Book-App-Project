import React from "react";
import "../App";
// import { useAppContext } from "./Context/appContext"


function Favorites({ myFav }) {
    // const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

    // function favoritesChecker(id) {
    //     const boolean = favorites.some((book) => book.id === id)
    //     return boolean
    // }

    return (
        <>
            <div className="favorites">
                {/* {favorites.length > 0 ? (
            <h1>You have favorite books</h1>
        ) :(
         <h1>You don't have any favorite books yet</h1>
        )} */}
        {
            myFav.map((fav,ind)=>{
                return (
                    <div key={ind}>
                        <img src={fav.image_url} alt='book image'/>
                        <h3>{fav.title}</h3>
                        <p>By:<b>{fav.authors}</b></p>
                    </div>
                )
            })
        }
            </div>
        </>


    )
}

export default Favorites