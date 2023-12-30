import React, { useContext } from "react";
import { Mycontext } from "./Context";

const Search = () =>{

  const {search, setSearch} = useContext(Mycontext)
    
    return(
        <>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}></input>
          </form>
          
        </>
    )

}
export default Search;