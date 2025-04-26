import React, { useRef } from 'react'
import styles from '../styles/KnightView.module.scss'

import { Colors } from '../models/figures/FigureModel'

const KnightView = () => {
    const count = useRef(0)

    return (
        <form className={`board ${styles.board}`}>
            {Array(8)
                .fill('')
                .map((_1, i) => {
                    return Array(8)
                        .fill('')
                        .map((_2, j) => {
                            const color = (i + j) % 2 !== 0 ? Colors.BLACK : Colors.WHITE
                            count.current++
                            return (
                                <div key={i + j} className={`cell ${color} ${styles.cell}`}>
                                    <input
                                        type='radio'
                                        name={`chess`}
                                        id={`chess-${count.current}`}
                                    />
                                    <label
                                        htmlFor={`chess-${count.current}`}
                                        data-index={count.current}
                                    />
                                </div>
                            )
                        })
                })}
        </form>
    )
}

export default KnightView
