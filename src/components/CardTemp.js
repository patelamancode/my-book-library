import React from 'react';
import './Card.css';

const CardTemp = ({id, title, author, publisher, year, image, price, read}) => {
  return (
    <div className='card-container' key={id}>
      <img src={image} alt={title}/>
      <p><b>Title : </b>{title}</p>
      <p><b>Author : </b>{author}</p>
    </div>
  )
}

export default CardTemp
