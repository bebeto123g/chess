import React, { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

import HomeView from '../views/HomeView'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomeView />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />,
    },
]
