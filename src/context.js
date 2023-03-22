import React, {useState, useEffect, useContext} from "react";
const URL = "https://example-data.draftbit.com/books";
const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [books, setBooks] = useState([]);
    const [favorite , setFavorite] = useState([]);

    
    
    const fetchBooks = async() => {
       
        try {
            const response = await fetch(`${URL}`);
            const data = await response.json();
           if(data){
                const newBooks = data.slice(0,50).map((book)=>{
                    const {id , title, authors, image_url} = book;

                    return{
                        id:id,
                        author: authors,
                        image_url: image_url,
                        title: title
                    }
                });

                setBooks(newBooks);
           }else{
            setBooks([]);
           }
      
        } catch (error) {
            console.log(error);
         
        }

    };

    useEffect(() => {
        fetchBooks();
    },[]);


    const AddToFavorite = (book)=>{
        const oldFavorite = [...favorite];
        const newFavorite = oldFavorite.concat(book);
        setFavorite(newFavorite);
    }

    const removeFromFavorite = (id)=>{
        const oldFavorite = [...favorite];
        const newFavorite = oldFavorite.filter((book)=>book.id !== id);
        setFavorite(newFavorite);
    }

    return (
        <AppContext.Provider value = {{
             books,favorite,AddToFavorite,removeFromFavorite
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};