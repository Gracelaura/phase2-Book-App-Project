import React from "react";

import { useState } from 'react';

function AddBookForm() {
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [description, setDescription] = useState('');
  const [genres, setGenres] = useState('');
  const [image_url, setImage] = useState('');

  function handleSubmit(e) {
    const formData = {
      title,
      authors,
      image_url,
      description,
      genres
    };
    e.preventDefault();
    fetch('https://midnight-api.herokuapp.com/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        
        setDescription('');
        setImage('');
        setAuthors('')
        setTitle('');
        setGenres('')
      });
  }
  return (
    <div className='add-book'>
      <h1>Add A Book Form</h1>
      <form className='add-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add the book title'
          name='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type='text'
          placeholder='Enter authors name'
          name='authors'
          value={authors}
          onChange={(event) => setAuthors(event.target.value)}
        />
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Enter book description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <input
          type='text'
          placeholder='Enter book genre e.g crime,thriller,...'
          name='genres'
          value={genres}
          onChange={(event) => setGenres(event.target.value)}
        />
        <br />
        <label htmlFor='picture'>Image Link:</label>
        <input
          type='url'
          placeholder='Paste direct link'
          name='image_url'
          value={image_url}
          onChange={(event) => setImage(event.target.value)}
        />
        <em>
          <span id='instructions'>
            <strong>Instructions</strong>:
          </span>{' '}
          Go to <a href='https://postimages.org/'>Post Images </a>
          and upload your book poster. Copy the <strong>
            Direct Link
          </strong>{' '}
          and paste it above.
        </em>
        <br />
        
        <button type='submit'>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBookForm