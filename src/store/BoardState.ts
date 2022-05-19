import { makeAutoObservable } from 'mobx'
import { Board } from '../models/BoardModel'
import { Cell } from '../models/CellModel'
import { Colors } from '../models/figures/FigureModel'

export interface IBoardState {
    board: Board
}

class $board {
    board: Board = new Board()
    currentPlayer: Colors = Colors.WHITE
    selectedCell: Cell | null = null

    constructor() {
        makeAutoObservable(this)
    }

    restart() {
        this.board = new Board()
        this.currentPlayer = Colors.WHITE
    }

    toggleCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === Colors.WHITE ? Colors.BLACK : Colors.WHITE
    }

    onSelectedCell(cell: Cell) {
        if (
            this.selectedCell &&
            this.selectedCell !== cell &&
            this.selectedCell.figure?.canMove(cell)
        ) {
            this.selectedCell.moveFigure(cell)
            this.toggleCurrentPlayer()
            this.selectedCell = null
        } else {
            if (cell.figure?.color === this.currentPlayer) {
                this.selectedCell = cell
            }
        }
    }

    highLightCells() {
        this.board.highLightCells(this.selectedCell)
    }

    updateBoard() {
        this.board = this.board.getCopyBoard()
    }

    get state(): IBoardState {
        return {
            board: this.board,
        }
    }
}

export default new $board()
