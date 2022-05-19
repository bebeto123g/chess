import Logo from '../../assets/black-king.png'
import { Cell } from '../CellModel'

export enum Colors {
    WHITE = 'white',
    BLACK = 'black',
}

export enum FigureName {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон',
}
export abstract class Figure {
    color: Colors
    cell: Cell
    logo: typeof Logo | null = null
    name: FigureName = FigureName.FIGURE
    id = Math.random()

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.cell = cell
        this.cell.figure = this
    }

    canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false
        }

        if (target.figure?.name === null) {
            return false
        }

        return true
    }

    abstract moveFigure(target: Cell): void
}
