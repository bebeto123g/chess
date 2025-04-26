import { Cell } from '../CellModel'
import { Colors, Figure, FigureName } from './FigureModel'

import BlackKPawn from '../../assets/black-pawn.png'
import WhitePawnt from '../../assets/white-pawn.png'

export class Pawn extends Figure {
    isFirstStep = true

    constructor(color: Colors, cell: Cell) {
        super(color, cell)
        this.logo = this.color === Colors.BLACK ? BlackKPawn : WhitePawnt
        this.name = FigureName.PAWN
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) {
            return false
        }

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2

        if (
            (target.y === this.cell.y + direction ||
                (this.isFirstStep && target.y === this.cell.y + firstStepDirection)) &&
            target.x === this.cell.x &&
            this.cell.board.getCell(target.x, target.y).isEmpty()
        ) {
            return true
        }

        if (
            target.y === this.cell.y + direction &&
            (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) &&
            this.cell.isEnemy(target)
        ) {
            return true
        }

        return false
    }

    moveFigure() {
        this.isFirstStep = false
    }
}
