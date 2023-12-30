import React, {createContext, useEffect, useState} from "react";

const Mycontext = createContext ()
const Myprovider = ({ children }) => {
 
   const[movies, setmovies] = useState([])
   const [Loading, setLoading] = useState(true)
   const[search, setSearch] = useState("titanic")
   

   
    const fetchmovies = async () =>{
        try{
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`);
            const movieData = await response.json();
            console.log(movieData)
            if(movieData.Response == "True"){
                setmovies(movieData.Search);
                setLoading(false)

            }
            else{

            }
            
        
        }
        catch (error){
            console.error(error);

        }
    }
    useEffect(() => {
        fetchmovies()
    }, [search])



    


    return <Mycontext.Provider value={{movies, search,  Loading, setSearch}}>
        {children}
        
    </Mycontext.Provider>

}
export {Mycontext, Myprovider}