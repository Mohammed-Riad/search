import React, { useState, useEffect } from 'react';


export default function ColorPage() {
    // let count=1;
    const [color, setcolor] = useState("black");
    let [count, setcount] = useState(1);

    // const [count, setcount] = useState(1);


    let colore = () => {
        // setcount(count + 1 )

        if (count == 1) {
            setcolor("red")
            setcount(count + 1)
        } else if (count == 2) {
            setcolor("green")
            setcount(count + 1)
        } else if (count == 3) {
            setcolor("gray")
            setcount(count + 1)
        } else if (count == 4) {
            setcolor("black")
        }

    }


    let coloree = () => {
        // setcount(count + 1 )

        if (count == 4) {
            setcolor("red")
            setcount(count - 1)
        } else if (count == 2) {
            setcolor("pink")
            setcount(count - 1)
        } else if (count == 3) {
            setcolor("green")
            setcount(count - 1)
        } else if (count == 4) {
            setcolor("black")
        }


    }

    useEffect(() => {
        if (color == "black") {
            return
        } else {
            console.log(`"the Colore " ${color}`)
        }

    }, [color]);

    {
        console.log()
    }
    return (
        <div>
            <>
                <div style={{ width: "300px", height: "300px", backgroundColor: color, margin: "200px" }}>
                    <div ></div>
                    <button style={{ marginLeft: "20px" }} onClick={colore}  >Click</button>
                    <button style={{ marginLeft: "20px" }} onClick={coloree}  >Click</button>


                    <h1>{count}</h1>
                </div>
            </>
        </div>
    );
}
