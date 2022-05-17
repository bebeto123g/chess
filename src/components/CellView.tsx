import React, { FC, memo } from 'react'
import { Cell } from '../models/CellModel'

interface ICellProps {
    cell: Cell
    isSelected: boolean
    onSelected: (cell: Cell) => void
}

const CellView: FC<ICellProps> = ({ cell, isSelected, onSelected }) => {
    return (
        <div
            className={`cell ${cell.color} ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelected(cell)}
            style={{ background: cell.available && cell.figure ? 'green' : '' }}
        >
            {cell.available && !cell.figure && <div className='available' />}
            {cell.figure?.logo && <img src={cell.figure.logo} />}
        </div>
    )
}

export default memo(CellView)
