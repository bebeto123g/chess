import { makeAutoObservable } from 'mobx'
import { Board } from '../models/BoardModel'
import { Cell } from '../models/CellModel'
import { Colors } from '../models/figures/FigureModel'

export interface IBoardState {
    board: Board
    currentPlayer: Colors
}

class BoardState {
    board: Board = new Board()
    currentPlayer: Colors = Colors.WHITE

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

    highLightCells(cell: Cell) {
        this.board.highLightCells(cell)
    }

    updateBoard() {
        this.board = this.board.getCopyBoard()
    }

    setBoard(board: Board) {
        this.board = board
    }

    get state(): IBoardState {
        return {
            board: this.board,
            currentPlayer: this.currentPlayer,
        }
    }
}

export default new BoardState()
