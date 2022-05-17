import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import HomeView from '../views/HomeView'
import KnightView from '../views/KnightView'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomeView />,
    },
    {
        path: '/knight',
        element: <KnightView />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />,
    },
]
