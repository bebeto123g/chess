import { Board } from './BoardModel'
import { Colors } from './ColorsModel'
import { Figure } from './figures/FigureModel'

export class Cell {
    public available = false // Можно ли переместиться
    public id = Math.random() // для ключей React) {

    constructor(
        public board: Board,
        readonly x: number,
        readonly y: number,
        readonly color: Colors,
        public figure: Figure | null,
    ) {}

    setFigure(figure: Figure) {
        this.figure = figure
        this.figure.cell = this
    }

    moveFigure(target: Cell) {
        if (this.figure?.canMove(target)) {
            this.figure.moveFigure(target)
            target.setFigure(this.figure)
            this.figure = null
        }
    }

    isEmpty() {
        return this.figure === null
    }

    isEmptyVertical(target: Cell): boolean {
        if (this.x !== target.x) {
            return false
        }

        const min = Math.min(this.y, target.y)
        const max = Math.max(this.y, target.y)

        for (let i = min + 1; i < max; i++) {
            if (!this.board.getCell(this.x, i).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y) {
            return false
        }

        const min = Math.min(this.x, target.x)
        const max = Math.max(this.x, target.x)

        for (let i = min + 1; i < max; i++) {
            if (!this.board.getCell(i, this.y).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEmptyDiagonal(target: Cell): boolean {
        const absY = Math.abs(target.y - this.y)
        const absX = Math.abs(target.x - this.x)

        if (absY !== absX) {
            return false
        }

        const dy = this.y < target.y ? 1 : -1
        const dx = this.x < target.x ? 1 : -1

        for (let i = 1; i < absY; i++) {
            if (!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
                return false
            }
        }

        return true
    }

    isEnemy(target: Cell): boolean {
        if (target.figure) {
            return this.figure?.color !== target.figure?.color
        }

        return false
    }
}
