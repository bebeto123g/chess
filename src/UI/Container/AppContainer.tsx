import React, { AllHTMLAttributes, FC } from 'react'
import styles from './Container.module.scss'


const AppContainer: FC<AllHTMLAttributes<HTMLDivElement>> = ({
    children,
    className = '',
    ...props
}) => (
    <div className={`${styles.appContainer} ${className}`} {...props}>
        {children}
    </div>
)

export default AppContainer