// import { margin } from '@mui/system';
import React from 'react';
import { useParams  } from 'react-router-dom';
import * as data from './data2'
// import Tours from './Tours';

export default function Tours() {

    const {id} = useParams();

 
    const filtered = data.City.filter(Series => {
        return Series.id == id;
    });
    
    console.log(filtered)
   
    return (
        <div style={{ display: "flex", marginTop: "20px" }}>
            {filtered.map(Series => {
                return (
                    <>
                        <div class="card" style={{ width: "300px", margin: "5px" , borderRadius:"10px"}} key={Series.id}>
                            <img src={Series.image} class="card-img-top" alt="Fissure in Sandstone" />
                            <div class="card-body">
                                <h5 class="card-title">Title :{Series.name} </h5>
                                <h5 class="card-title">Title :{Series.info} </h5>
                                <h5 class="card-title">price :{Series.price} </h5>

                              
                            </div>
                        </div>
                    </>
                );
            })}
            
        </div>
    );
}
