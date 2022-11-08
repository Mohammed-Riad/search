import React, { useState } from 'react';

export default function Example(props) {
  // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//     let increase = () =>
//     {
//         setCount(count + 1)
//     }

//     let decrease = () =>
//     {
//         setCount(count - 1)
//     }
  return (
    <div>
      <p>You clicked {props.count} times</p>
      <button onClick={props.increase}>
      increase
      </button>
      <button style={{marginLeft:"20px"}} onClick={props.decrease}>
      decrease 
      </button>
    </div>
  );
}