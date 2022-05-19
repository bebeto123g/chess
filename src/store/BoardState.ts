import { makeAutoObservable } from 'mobx'
import { Board } from '../models/BoardModel'
import { Cell } from '../models/CellModel'
import { Colors } from '../models/figures/FigureModel'

export interface IBoardState {
    board: Board
    currentPlayer: Colors
    selectedCell: Cell | null
}

class BoardState {
    board: Board = new Board()
    currentPlayer: Colors = Colors.WHITE
    selectedCell: Cell | null = null

    constructor() {
        makeAutoObservable(this)
    }

    restart() {
        this.board = new Board()
        this.currentPlayer = Colors.WHITE
        this.setSelectedCell(null)
    }

    toggleCurrentPlayer() {
        this.currentPlayer = this.currentPlayer === Colors.WHITE ? Colors.BLACK : Colors.WHITE
    }

    highLightCells() {
        this.board.highLightCells(this.selectedCell)
        this.updateBoard()
    }

    updateBoard() {
        this.board = this.board.getCopyBoard()
    }

    onSelectedCell(cell: Cell) {
        if (
            this.selectedCell &&
            this.selectedCell !== cell &&
            this.selectedCell.figure?.canMove(cell)
        ) {
            this.selectedCell.moveFigure(cell)
            this.toggleCurrentPlayer()
            this.setSelectedCell(null)
        } else if (cell.figure?.color === this.currentPlayer) {
            this.setSelectedCell(cell)
        }

        this.highLightCells()
    }

    setBoard(board: Board) {
        this.board = board
    }

    setSelectedCell(cell: Cell | null) {
        this.selectedCell = cell
    }

    get state(): IBoardState {
        return {
            board: this.board,
            currentPlayer: this.currentPlayer,
            selectedCell: this.selectedCell,
        }
    }
}

export default new BoardState()
