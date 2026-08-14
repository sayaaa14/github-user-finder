import { useState } from "react";

function Search() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async () =>  {

        console.log("search:", search);

        setError(null);
        setLoading(true);

        try {
            const url = `https://api.github.com/users/${search}`;

            const response = await fetch(url);

            if(!response.ok) {
                throw new Error("User not found")
            }
            const responseData = await response.json();

            setData(responseData);
           

        } catch(error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    return(
        <>
        <h2>GitHub User Finder</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value) } />
        <button onClick={handleSearch}>{loading ? "Searching..." : "Search"}</button>
        {data && <h3>{data.login}</h3>}
        {error && <p>{error}</p>}
        </>
    )
}

export default Search;