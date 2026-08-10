import { useState } from "react";

function Search() {
    const [search, setSearch] = useState("");

    const handleSearch = () =>  {
        console.log(search)
    }
    return(
        <>
        <h2>GitHub User Finder</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value) } />
        <button onClick={handleSearch}>Search</button>
        </>
    )
}

export default Search;