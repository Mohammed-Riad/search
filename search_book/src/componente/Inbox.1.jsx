import React from 'react';
// import * as data from './data3';
import data from './Inbox.json';

import { useState, useEffect } from "react";

// console.log(data)


export default function Inbox() {
    const [search, setsearch] = useState("");
    const [price, setprice] = useState("");

    const [books, setbooks] = useState(data);



    let search1 = (event) => {
        setsearch(event.target.value);

        // setbooks(books.eBooks.filter(x => x.language == event.target.value) || [{}])
        // const filteredData =(books?.eBooks?.filter(book => book.language == event.target.value)|| [{}])
        //    console.log(filteredData)

    }

    let preco = (event) => {
        setprice(event.target.value);
        console.log(event.target.value)
        // setbooks(books.eBooks.filter(x => x.language == event.target.value) || [{}])
        // const filteredData =(books?.eBooks?.filter(book => book.language == event.target.value)|| [{}])
        //    console.log(filteredData)

    }

    // useEffect = ()=>
    // {
    //     console.log(books.eBooks)
    // }

    // let all = ()=>
    // {
    //     data?.eBooks?.filter(book => {
    //         if(search)
    //         {
    //             return book.language.includes(search)
    //         }else{
    //             return book
    //         }
    //         })
    // }

    return (

        <>


            <div style={{ width: "400px" }}>
                <h1>search</h1>
                <input type="text" onChange={search1} /></div>
            <h1>{search}</h1>
            <select name="" id="" onChange={preco} value={"Price"}  >
                <option value="10" >10</option>
                <option value="20">20</option>
                <option value="30" >30</option>

            </select>
            <div style={{ display: "flex", marginTop: "20px", flexWrap: "wrap" }}>

                {data?.eBooks?.filter(book => {
                    if (search) {
                        return book.language == search || book.edition ==  search

                    } else {
                        return book
                    }
                }).map((book) => {
                    return (
                        <div className="card" style={{ width: "300px", margin: "20px", marginLeft: "20px" }}>

                            <div className="card-body">
                                <h5 className="card-title">language :{book.language} </h5>
                                <h5 className="card-title">edition :{book.edition} </h5>

                                <h5 className="card-title">price :{book.price} </h5>

                            </div>
                        </div>

                        
                    );
                })}
            </div>


  
        </>
    );
}
