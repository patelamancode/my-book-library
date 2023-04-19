import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "./Db";

export const BookDataContext = createContext();

export const BookDataContextProvider = ({children}) =>{

    const [bookData, setBookData] = useState([]);
    const [favoriteBook, setFavoriteBook] = useState([])
    const [readBook, setReadBook] = useState([])

    const getData = async () =>{
        try{
            const response = await fakeFetch('https://example.com/api/books');
            if(response.status === 200){
                setBookData(response.data.books)
                setReadBook(response.data.books.filter(({read})=> read))
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
        const selectedBook = bookData.filter(({id}) => id === userSelectedBook);
        setFavoriteBook((favoriteBook) => [...favoriteBook, selectedBook])
    }
    
    const markAsRead = (userSelectedBook) =>{
        const selectedBook = bookData.filter(({id})=> id === userSelectedBook.id)
        setReadBook((readBook) => [...readBook, selectedBook])
    }
    
    return(
        <BookDataContext.Provider value={{bookData, favoriteBook, addFavoriteBook, readBook, markAsRead }}>
            {children}
        </BookDataContext.Provider>
    )
}