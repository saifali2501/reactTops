import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

export default function MyTask() {
  let [count, setCount] = useState(0);
  // let [stop, setStop] = useState(null);

  const startCount = () => {

    if (count === 0){
        setCount(count ++)
    }else{
      clearInterval(0)
    }
  
    
  };

 

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={startCount}>Start Count</Button>
      {/* <Button onClick={stopCount}>Stop Count</Button> */}
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";

// export default function MyTask() {
//   const [count, setCount] = useState(20);
//   const [intervalId, setIntervalId] = useState(null);

//   const startCount = () => {
//     if (count === 0) {
//       setCount(20); // Reset count if it's already zero
//     } else {
//       const id = setInterval(() => {
//         setCount((prevCount) => prevCount - 1); // Update count based on the previous state
//       }, 1000);
//       setIntervalId(id);
//     }
//   };

//   const stopCount = () => {
//     clearInterval(intervalId); // Clear the interval using intervalId
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <Button onClick={startCount}>Start Count</Button>
//       <Button onClick={stopCount}>Stop Count</Button>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";

// export default function MyTask() {
//   const [count, setCount] = useState(20);
//   const [intervalId, setIntervalId] = useState(null);

//   const startCount = () => {
//     if (count === 0) {
//       setCount(20); // Reset count if it's already zero
//     } else if (!intervalId) { // Add a condition to prevent starting multiple intervals
//       const id = setInterval(() => {
//         setCount((prevCount) => prevCount - 1); // Update count based on the previous state
//       }, 1000);
//       setIntervalId(id);
//     }
//   };

//   const stopCount = () => {
//     clearInterval(intervalId); // Clear the interval using intervalId
//     setIntervalId(null); // Reset intervalId state
//   };

//   useEffect(() => {
//     // Cleanup function to clear interval when component unmounts
//     return () => {
//       clearInterval(intervalId); // Clear the interval
//     };
//   }, [intervalId]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <Button onClick={startCount}>Start Count</Button>
//       <Button onClick={stopCount}>Stop Count</Button>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Button } from "reactstrap";

// export default function MyTask() {
//   const [count, setCount] = useState(20);
//   const [intervalId, setIntervalId] = useState(null);

//   const startCount = () => {
//     if (count === 0) {
//       setCount(0);
//     } else {
//       const id = setInterval(() => {
//         setCount((prevCount) => prevCount - 1);
//       }, 1000);
//       setIntervalId(id);
//     }
//   };

//   const stopCount = () => {
//     clearInterval(intervalId);
//     setCount(20); // Reset count when stopping
//     setIntervalId(null);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <Button onClick={startCount}>Start Count</Button>
//       <Button onClick={stopCount}>Stop Count</Button>
//     </div>
//   );
// }





//   if (count === 0) {
  //     setCount(10);
  //     // clearInterval(stop)

  //     return; 
      
  //   } else {
  //     let id = setInterval(() => {
  //       console.log("==============>",id);
  //       // setStop(id );
  //       setCount(count ++)
  //       // setCount((prevCount) => prevCount - 1); 
       
  //     }, 1000);
  //     // setStop(id)
  //   }
  
  // };

  // setTimeout(() => {
  //   clearInterval(id)
  // },40000 );

  // useEffect(() => {
  //   if (count === 0) {
  //     clearInterval(stop); // Stop the count if it reaches 0
  //   }
  // }, [count, stop]);

  // const stopCount = () => {
  //   clearInterval(stop);