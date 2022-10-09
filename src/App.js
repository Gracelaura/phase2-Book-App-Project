import './App.css';
import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom"
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import AddBookForm from "./components/AddBookForm"

function App() {
  const [myFav, setMyFav] = useState([])

  function addBookToFav(book){
console.log(book);
myFav.includes(book)?setMyFav(myFav):setMyFav(myFav=>[...myFav,book])
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList addBookToFav={addBookToFav}/>} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites myFav={myFav} />} />
        <Route path="/addbook" element={<AddBookForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
