import { Cell } from '../CellModel'
import { Colors } from '../ColorsModel'
import { Figure, FigureName } from './FigureModel'

import BlackBishop from '../../assets/black-bishop.png'
import WhiteBishop from '../../assets/white-bishop.png'

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = this.color === Colors.BLACK ? BlackBishop : WhiteBishop
        this.name = FigureName.BISHOP
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        if (this.cell.isEmptyDiagonal(target)) {
            return true
        }

        return false
    }
}
