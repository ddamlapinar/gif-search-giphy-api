import {useState} from 'react'
import axios from 'axios';

function SearchInput({setIsError,setIsLoading,setData}) {
    const [search, setSearch] = useState("")

    const handleFormChange = (e) => {
        setSearch(e.target.value);

        console.log(search)

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsError(false);
        setIsLoading(true);
        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "fJJEFiXf36SQ0VvSKQViX0RzJNlUSqol",
                    q: search,
                    limit: 100
                }
            });
            setData(results.data.data);

        }
        catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }
        setIsLoading(false);


    }
    return (
        <div>
            <form className="form-inline justify-content-center m-2">


                <div class="nes-field is-inline">
                    <input
                        value={search}
                        onChange={handleFormChange}
                        id="dark_field"
                        className="nes-input is-dark m-4"
                        placeholder="search" />
                </div>




                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="m-2 nes-btn is-primary">
                    Go!</button>

            </form>
        </div>
    );
}
export default SearchInput;