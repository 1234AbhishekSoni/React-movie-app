import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "./Movie";
import { Link } from "react-router-dom";



const SingleMovie = () =>{
    const   {id} = useParams()

    const [movie, setmovie] = useState("")
    const [Loading, setLoading] = useState(true)

    const singlemovie = async () =>{
        try{
           const data = await fetch(`http://www.omdbapi.com/?apikey=f5885291&i=${id}`)
           const res = await data.json()
           if (res.Response == "True"){
            setmovie(res)
            setLoading(false)

           }
        //    console.log(res)
         
        }
        catch (error){
            console.log(error)

        }
    }
    useEffect(()=>{
        singlemovie()
    },[])

    if (Loading){
        return (
            <div className="data-loading">
                <h2>Loading.......</h2>
            </div>
        )
    }
    return(
        <>
        {/* <SingleMovie/> */}
         {/* <h1>this is singlemovie page</h1>
         <h2> this id is {id}</h2> */}
         <div class="cards">
          <div class="left">
          <img src={movie.Poster} alt="" height="400px" width="350px"></img>
          </div>
          <div class="right">
            <h1>Title: <span>{movie.Title}</span></h1>
            <h1>Released: <span>{movie.Released}</span></h1>
            <h1>Country: <span>{movie.Country}</span></h1>
            <h1>Genre: <span>{movie.Genre}</span></h1>
            <Link class="bt" to="/"type="submit">Go-Back</Link>
          </div>
         </div>
        
        </>
    )
}
export default SingleMovie;