import React, { useCallback, useEffect, useState } from 'react'

import Container from '../UI/Container/Container'
import BoardView from '../components/BoardView'
import { Board } from '../models/BoardModel'
import { Player } from '../models/PLayerModel'
import { Colors } from '../models/ColorsModel'

const HomeView = () => {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

    useEffect(() => {
        restart()
    }, [])

    const restart = () => {
        const newBoard = new Board()
        setCurrentPlayer(whitePlayer)
        setBoard(newBoard)
    }

    const swapPlayer = () => {
        setCurrentPlayer((prev) => (prev === whitePlayer ? blackPlayer : whitePlayer))
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
        </Container>
    )
}

export default HomeView
