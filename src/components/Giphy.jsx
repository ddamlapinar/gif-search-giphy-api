import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader'
import Error from './Error'
import Paginate from './Paginate'
import { Col } from 'react-bootstrap'
import { FcLikePlaceholder } from 'react-icons/fc'
function Giphy() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    //page 1 -> 1-25
    //page 2 -> 26-50
    //page 3 -> 51-75



    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "fJJEFiXf36SQ0VvSKQViX0RzJNlUSqol",
                        limit: 100,
                    }
                });

                console.log(results);
                setData(results.data.data);
            }
            catch (err) {
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }

            setIsLoading(false);
        };

        fetchData();
    }, []);
    const renderGifs = () => {
        if (isLoading) {
            return <Loader />
        }

        return currentItems.map(item => {
            return (
              
                <div className="gif">
                    <img src={item.images.fixed_height.url} alt="gif" />
                    {/* <FcLikePlaceholder size = {30}/> */}
                </div>
              
            );
        });

    }
    const renderError = () => {
        if (isError) {
            return <Error />
        }
    }

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
    const pageSelected = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="m-2">
            {renderError()};
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
            <Paginate
                pageSelected={pageSelected}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
            />
            <div className="gifs container">
                {renderGifs()}
            </div>
           
        </div>
    )
}
export default Giphy;
