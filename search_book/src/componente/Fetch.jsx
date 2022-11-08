import { height } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const baseURL = "https://ghibliapi.herokuapp.com/films";

export default function App() {
    const [post, setPost] = useState([baseURL]);
    const [search, setsearch] = useState("");





    useEffect(() => {

        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);


    useEffect(() => {



        let filter = post?.filter(book => {
            if (search) {
                return book.title == search

            } else {
                return book
            }

        })

        setPost(filter)

    }, [search])

    if (!post) return null;

    return (
        <>
            <div style={{ width: "400px" }}>
                <h1>search</h1>
                <input type="text" onChange={(event) => setsearch(event.target.value)} /></div>
            <h1>{search}</h1>

            <div style={{ display: "flex", marginTop: "20px", flexWrap: "wrap" }}>

                {post?.map((book) => {
                    return (
                        <div className="card" >

                            <div className="card-body"  >
                                <img src={book.image} alt="" style={{}} />
                                <h5 className="card-title">title :{book.title} </h5>
                                <h5 className="card-title">original_title :{book.original_title} </h5>
                                <h5 className="card-title">original_title_romanised :{book.original_title_romanised} </h5>
                                <h5 className="card-title">producer :{book.producer} </h5>
                                <h5 className="card-title">release_date :{book.release_date} </h5>
                                <h5 className="card-title">running_time :{book.running_time} </h5>







                            </div>
                        </div>


                    );
                })}
            </div>
        </>
    );
}