import React, { useCallback, useEffect, useState } from 'react'

import Container from '../UI/Container/Container'
import BoardView from '../components/BoardView'
import LostFigureView from '../components/LostFigureView'
import { Board } from '../models/BoardModel'
import { Colors } from '../models/figures/FigureModel'

const HomeView = () => {
    const [board, setBoard] = useState(new Board())
    const [currentPlayer, setCurrentPlayer] = useState<Colors>(Colors.WHITE)

    useEffect(() => {
        restart()
    }, [])

    const restart = () => {
        const newBoard = new Board()
        setCurrentPlayer(Colors.WHITE)
        setBoard(newBoard)
    }

    const swapPlayer = () => {
        setCurrentPlayer((prev) => (prev === Colors.WHITE ? Colors.BLACK : Colors.WHITE))
    }

    const updateBoard = useCallback((board: Board) => {
        setBoard(board)
    }, [])

    return (
        <Container>
            <BoardView
                board={board}
                setBoard={updateBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
            />
            <div className=''>
                <button onClick={() => restart()}>Reset</button>
            </div>
            <div className='lost-wrapper'>
                <LostFigureView title='Black' figures={board.lostBlackFigures} />
                <LostFigureView title='White' figures={board.lostWhiteFigures} />
            </div>
        </Container>
    )
}

export default HomeView
