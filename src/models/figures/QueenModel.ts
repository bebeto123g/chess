
import { Cell } from '../CellModel'
import { Colors, Figure, FigureName } from './FigureModel'

import BlackKQueen from '../../assets/black-queen.png'
import WhiteQueen from '../../assets/white-queen.png'

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = this.color === Colors.BLACK ? BlackKQueen : WhiteQueen
        this.name = FigureName.QUEEN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        if (this.cell.isEmptyVertical(target)) {
            return true
        }

        if (this.cell.isEmptyHorizontal(target)) {
            return true
        }

        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }

        return false
    }
}
