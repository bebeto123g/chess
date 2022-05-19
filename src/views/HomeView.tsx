import React from 'react'
import { observer } from 'mobx-react'

import BoardView from '../components/BoardView'
import LostFigureView from '../components/LostFigureView'
import BoardState from '../store/BoardState'

const HomeView = observer(() => (
    <>
        <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Ход: {BoardState.currentPlayer}
            <button onClick={() => BoardState.restart()}>Reset</button>
        </h2>
        <div className='lost-wrapper'>
            <BoardView />
            <LostFigureView
                title='Black'
                figures={BoardState.board.lostBlackFigures}
                key={'Black' + BoardState.board.lostBlackFigures.length}
            />
            <LostFigureView
                title='White'
                figures={BoardState.board.lostWhiteFigures}
                key={'White' + BoardState.board.lostWhiteFigures.length}
            />
        </div>
    </>
))

export default HomeView
