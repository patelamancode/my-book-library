import React, { useContext } from 'react'
import '../components/Card.css'
import { BookDataContext } from '../context/DataContext'

const Read = () => {

  const {readBook} = useContext(BookDataContext);
 
  return (
    <div>
      <h1 className='page-title'>Read page</h1>
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
        {readBook.map((book)=>{
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

export default Read
