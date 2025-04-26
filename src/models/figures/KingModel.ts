import { Cell } from '../CellModel'
import { Colors, Figure, FigureName } from './FigureModel'

import BlackKing from '../../assets/black-king.png'
import WhiteKing from '../../assets/white-king.png'

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = this.color === Colors.BLACK ? BlackKing : WhiteKing
        this.name = FigureName.KING
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        if (
            this.cell.isEmptyVertical(target) &&
            (target.y === this.cell.y + 1 || target.y === this.cell.y - 1)
        ) {
            return true
        }

        if (
            this.cell.isEmptyHorizontal(target) &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        ) {
            return true
        }

        if (
            this.cell.isEmptyDiagonal(target) &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        ) {
            return true
        }

        return false
    }
}
