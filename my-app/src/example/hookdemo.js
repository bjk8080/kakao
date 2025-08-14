import {useState} from 'react';

// const HookDemo =()=> {
//     count = count +1;
//     console.log(count)
// }

// return(
//     <div>
//         <p> 현재 카운트 : {count}</p>
//         <button onClick={handleClick}>증가</button>
//     </div>
// );

const HookDemo = () => {
    let count = 0;

    const handleClick = () => {
        count = count +1;
        console.log(count)
    }

    return (
        <div>
            <p> 현재 카운트 : {count}</p>
            <button onClick={handleClick}>증가</button>
        </div>
    );
};

export default HookDemo;