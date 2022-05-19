import React, { Fragment } from 'react'
import { observer } from 'mobx-react'
import BoardState from '../store/BoardState'
import CellView from './CellView'

const BoardView = observer(() => (
    <>
        <h2>Ход: {BoardState.currentPlayer}</h2>
        <div className='board'>
            {BoardState.board.cells.map((row, index) => (
                <Fragment key={index}>
                    {row.map((cell) => {
                        const isSelected =
                            cell.x === BoardState.selectedCell?.x &&
                            cell.y === BoardState.selectedCell?.y

                        const key = String(cell.x) + String(cell.y) + Number(cell.available)
                        return <CellView key={key} cell={cell} isSelected={isSelected} />
                    })}
                </Fragment>
            ))}
        </div>
    </>
))

export default BoardView
