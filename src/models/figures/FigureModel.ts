import { Colors } from '../ColorsModel'
import Logo from '../../assets/black-king.png'
import { Cell } from '../CellModel'

export enum FigureName {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}

export class Figure {
    color: Colors
    cell: Cell
    logo: typeof Logo | null
    name: FigureName
    id: number

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
        this.logo = null
        this.name = FigureName.FIGURE
        this.id = Math.random()
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false
        }

        if (target.figure?.name === FigureName.KING) {
            return false
        }

        return true
    }

    moveFigure(target: Cell): void {
        console.log(target)
    }
}
