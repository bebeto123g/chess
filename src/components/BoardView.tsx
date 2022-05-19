import React, { FC, Fragment, useCallback, useEffect, useState } from 'react'

import Loader from '../UI/Loader/Loader'
import CellView from './CellView'
import { Cell } from '../models/CellModel'
import { Board } from '../models/BoardModel'
import { Colors } from '../models/figures/FigureModel'

interface IBoardViewProps {
    board: Board
    currentPlayer: Colors
    setBoard: (board: Board) => void
    swapPlayer: () => void
}

const BoardView: FC<IBoardViewProps> = ({ board, currentPlayer, setBoard, swapPlayer }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const onSelectedCell = useCallback((cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell)
            swapPlayer()
            setSelectedCell(null)
        } else {
            if (cell.figure?.color === currentPlayer) {
                setSelectedCell(cell)
            }
        }
    }, [selectedCell, currentPlayer, swapPlayer])

    const highLightCells = () => {
        board.highLightCells(selectedCell)
        updateBoard()
    }

    const updateBoard = () => {
        setBoard(board.getCopyBoard())
    }

    useEffect(() => {
        highLightCells()
    }, [selectedCell])


    if (!board) return <Loader color='orange' />

    return (
        <>
            <h2>Ход: {currentPlayer}</h2>
            <div className='board'>
                {board.cells.map((row, index) => (
                    <Fragment key={index}>
                        {row.map((cell) => {
                            const isSelected =
                                cell.x === selectedCell?.x && cell.y === selectedCell?.y
                            return (
                                <CellView
                                    onSelected={onSelectedCell}
                                    key={String(cell.id) + cell.figure}
                                    cell={cell}
                                    isSelected={isSelected}
                                />
                            )
                        })}
                    </Fragment>
                ))}
            </div>
        </>
    )
}

export default BoardView
