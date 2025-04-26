import React, { FC, memo } from 'react'
import { Cell } from '../models/CellModel'
import BoardState from '../store/BoardState'

interface ICellProps {
    cell: Cell
    isSelected: boolean
}

const CellView: FC<ICellProps> = ({ cell, isSelected }) => {
    console.log('render cell')

    return (
        <div
            className={`cell ${cell.color} ${isSelected ? 'selected' : ''}`}
            onClick={() => BoardState.onSelectedCell(cell)}
            style={{ background: cell.available && cell.figure ? 'green' : '' }}
        >
            {cell.available && !cell.figure && <div className='available' />}
            {cell.figure?.logo && <img src={cell.figure.logo} />}
        </div>
    )
}

export default memo(CellView)
