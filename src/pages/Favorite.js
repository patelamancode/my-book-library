import React, { useContext } from 'react'
import { BookDataContext } from '../context/DataContext'

const Favorite = () => {
  const {favoriteBook} = useContext(BookDataContext);
  
  return (
    <div>
      <h1>Favorite page</h1>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {favoriteBook.map((book)=>{
            const {id,image,title,author} = book
            return(
                <div className='card-container' key={id}>
                    <img src={image} alt={title}/>
                    <p><b>Title : </b>{title}</p>
                    <p><b>Author : </b>{author}</p>
                </div>               
            )
        })}
      </div>
    </div>
  )
}

export default Favorite
