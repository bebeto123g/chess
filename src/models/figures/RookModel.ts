import { Cell } from '../CellModel'
import { Colors } from '../ColorsModel'
import { Figure, FigureName } from './FigureModel'

import BlackRook from '../../assets/black-rook.png'
import WhiteRook from '../../assets/white-rook.png'

export class Rook extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = this.color === Colors.BLACK ? BlackRook : WhiteRook
        this.name = FigureName.ROOK
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

        return false
    }
}
