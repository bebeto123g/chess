import { makeAutoObservable } from 'mobx'
import { Board } from '../models/BoardModel'

export interface IBoardState {
    board: Board | null
}

class $board {
    board: Board | null = null

    constructor() {
        makeAutoObservable(this)
    }

    restart() {
        this.board = new Board()
    }

    get state(): IBoardState {
        return {
            board: this.board,
        }
    }
}

export default new $board()
