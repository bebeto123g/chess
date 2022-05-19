import { Cell } from '../CellModel'
import { Colors, Figure, FigureName } from './FigureModel'

import BlackKnight from '../../assets/black-knight.png'
import WhiteKnight from '../../assets/white-knight.png'

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = this.color === Colors.BLACK ? BlackKnight : WhiteKnight
        this.name = FigureName.KNIGHT
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)

        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1)
    }

    moveFigure(target: Cell) {
        console.log(target)
    }
}
