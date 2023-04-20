import React, { useContext } from 'react'
import { BookDataContext } from '../context/DataContext'
import '../components/Card.css'

const Home = () => {

    const {bookData, favoriteBook, addFavoriteBook, markAsRead} = useContext(BookDataContext)

    const checkFav = (book) =>{
        if(favoriteBook.find((item) => item.id === book.id)){
            return true;
        }
    }
    
  return (
    <div>
      <h1>All Books</h1>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {bookData.map((book)=>{
            const {id,image,title,author,read} = book
            return(
                <div key={id} className='card-container'>
                    <img src={image} alt={title}/>
                    <p><b>Title : </b>{title}</p>
                    <p><b>Author : </b>{author}</p>
                    <div className='btn-container'>
                        <button disabled={read} onClick={()=>markAsRead(book)}>{read? 'Already read' : 'Mark as read'}</button>
                        <button onClick={()=>addFavoriteBook(book)}>{checkFav(book) ? 'Goto Fav' : 'Add to Fav'}</button>
                    </div>
                </div>               
            )
        })}
      </div>
    </div>
  )
}

export default Home

