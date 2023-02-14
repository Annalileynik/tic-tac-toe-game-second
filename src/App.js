import './App.css';
import Header from "./Header";
import {useEffect, useState} from "react";
import Square from "./components/Square";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [gamerX,setGamerX]=useState(true)
    const [winner,setWinner]=useState(undefined)
    const siteName = 'Tic tac toe game'
    const boardStyle = {
        border: "4px double purple",
        width: "300px",
        height: '300px',
        margin: '0px',
        display: "grid",
        gridTemplateColumns: "auto auto auto"
    }
    const handleMove = (el, i) => {
        if (el === null) {
            const gamer = gamerX ? 'X':'0'
            setBoard(board.map((el,ind)=>
            i===ind ? gamer:el))
        }
        setGamerX(!gamerX)
    }

    useEffect(()=>winnerCalculate(), [board])
    const winnerCalculate = () => {
        const winningCombination=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]

        for(let i=0; i<winningCombination.length; i++){
            const[a,b,c]=winningCombination[i]
            if (board[a] && board[a]===board[b] && board[b]===board[c]) {
                setWinner(`${board[a]} won!`)
            }
        }
    }

    return (
        <div className="App">
            <Header siteName={siteName}/>
            <div style={boardStyle}>
                {board.map((el, i) =>
                    <Square key={i} el={el} index={i}
                            handleMove={handleMove}/>
                )}
            </div>
            {winner}
        </div>
    );
}

export default App;
