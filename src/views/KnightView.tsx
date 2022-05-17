import React, { useRef } from 'react'
import { Colors } from '../models/ColorsModel'
import styles from '../styles/KnightView.module.scss'

const KnightView = () => {
    const count = useRef(0)

    return (
        <div className={`board ${styles.board}`}>
            {Array(8)
                .fill('')
                .map((_1, i) => {
                    return Array(8)
                        .fill('')
                        .map((_2, j) => {
                            const color = (i + j) % 2 !== 0 ? Colors.BLACK : Colors.WHITE
                            count.current++
                            return (
                                <div
                                    key={i + j}
                                    className={`cell ${color} ${styles.cell}`}
                                    data-index={count.current}
                                ></div>
                            )
                        })
                })}
        </div>
    )
}

export default KnightView
