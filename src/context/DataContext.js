import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./Db";

export const BookDataContext = createContext();

export const BookDataContextProvider = ({children}) =>{

    const [bookData, setBookData] = useState([]);
    const [favoriteBook, setFavoriteBook] = useState([])
    const [userData, setUserData] = useState()
    
    const getData = async () =>{
        try{
            const response = await fakeFetch('https://example.com/api/books');
            if(response.status === 200){
                setBookData(response.data.books)
                setUserData(response.data.user)
            } 
        }
        catch(error){
            console.log(error.message);
        }
    }
    useEffect(()=>{
        getData()
    },[])
    

    const addFavoriteBook = (userSelectedBook) =>{
        const selectedBook = bookData.find(({id}) => id === userSelectedBook.id);
        console.log(selectedBook);
        setFavoriteBook((favoriteBook) => [...favoriteBook, selectedBook])
    }
    
    const markAsRead = (userSelectedBook) =>{
        const selectedBook = bookData.map((book)=>book.id === userSelectedBook.id ? {...book, read : !book.read} : book)
        setBookData(selectedBook)
    }
    const readBook = bookData.filter(({read})=> read)
    
    
    return(
        <BookDataContext.Provider value={{bookData, favoriteBook, addFavoriteBook, markAsRead, readBook, userData }}>
            {children}
        </BookDataContext.Provider>
    )
}