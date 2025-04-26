import React, { FC, memo } from 'react'
import { Figure } from '../models/figures/FigureModel'

interface ILostFigureViewProps {
    title: string
    figures: Figure[]
}

const LostFigureView: FC<ILostFigureViewProps> = ({ title, figures }) => {
    console.log('render LostFigureView')

    return (
        <div className='lost'>
            <h3>{title}</h3>
            {figures.map((figure) => {
                return (
                    <div key={figure.id}>
                        {figure.name}:{' '}
                        {figure.logo && <img width={20} height={20} src={figure.logo} />}
                    </div>
                )
            })}
        </div>
    )
}

export default memo(LostFigureView)
