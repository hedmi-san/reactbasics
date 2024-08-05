
import { useState } from "react";


// function MyButton({ count, event }) {
//   return <button onClick={event}>CLicked {count} times </button>
// }




// function App() {
//   const [count, setCount] = useState(0)
//   function onhandle() {
//     setCount(count + 1);
//   }
//   return (
//     <div className="App">
//       <MyButton count={count} event={onhandle} />
//       <MyButton count={count} event={onhandle} />
//     </div>
//   );
// }
//54:00

function Square({ value, onSquareClicked }) {


    return <button className="square" onClick={onSquareClicked}>{value}</button>
}

function App() {
    const [squares, setSq] = useState(Array(9).fill(null));
    function handleClicked(index) {
        const nextSqaures = squares.slice();
        nextSqaures[index] = 'X';
        setSq(nextSqaures);
    }
    return (
        <>
            <div className="board-row">
                <Square onSquareClicked={() => handleClicked(0)} value={squares[0]} />
                <Square onSquareClicked={() => handleClicked(1)} value={squares[1]} />
                <Square onSquareClicked={() => handleClicked(2)} value={squares[2]} />
            </div>
            <div className="board-row">
                <Square onSquareClicked={() => handleClicked(3)} value={squares[3]} />
                <Square onSquareClicked={() => handleClicked(4)} value={squares[4]} />
                <Square onSquareClicked={() => handleClicked(5)} value={squares[5]} />
            </div>
            <div className="board-row">
                <Square onSquareClicked={() => handleClicked(6)} value={squares[6]} />
                <Square onSquareClicked={() => handleClicked(7)} value={squares[7]} />
                <Square onSquareClicked={() => handleClicked(8)} value={squares[8]} />
            </div>

        </>
    );
}


export default App;
