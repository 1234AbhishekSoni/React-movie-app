import React, { useContext } from "react";
import { Mycontext } from "./Context";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './../App.css';
import {Link} from "react-router-dom"


const Movie = () =>{
    const {movies, Loading} = useContext(Mycontext)
    if (Loading){
      return <div className="Wait Data-Loading"><h1>Loading......</h1></div>
    }

    
    return(
        <>
        <div className="container">
          <div class="row m-5 ">

          { movies?
           movies.map((mymovies) => {
            return (
              <div class="col-md-4 mt-3">
            <Link to ={`/movie/${mymovies.imdbID}`}>
              <div class="card">
                <div className="card-header">
                   <img src={mymovies.Poster} class="card-img-top"/>
                </div>
                <div className="card-body">
                    <h3>{mymovies.Title}</h3>

                </div>
 
              </div>
              </Link >
            </div>
            )

           })
          : ""}
        
            
            
            
           
          
            
            
          </div>

        
      </div>


        
        </>
    )
}
export default Movie;