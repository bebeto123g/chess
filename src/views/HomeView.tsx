import React from 'react'
import { observer } from 'mobx-react'

import Container from '../UI/Container/Container'
import BoardView from '../components/BoardView'
import LostFigureView from '../components/LostFigureView'
import BoardState from '../store/BoardState'

const HomeView = observer(() => (
    <Container>
        <div className=''>
            <button onClick={() => BoardState.restart()}>Reset</button>
        </div>
        <BoardView />
        <div className='lost-wrapper'>
            <LostFigureView title='Black' figures={BoardState.board.lostBlackFigures} />
            <LostFigureView title='White' figures={BoardState.board.lostWhiteFigures} />
        </div>
    </Container>
))

export default HomeView
