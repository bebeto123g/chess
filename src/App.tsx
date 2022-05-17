import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'

import Header from './components/Header/Header'
import PageLoader from './UI/Loader/PageLoader'

const App = () => {
    const appRoutes = useRoutes(routes)

    return (
        <>
            <Header />
            <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
        </>
    )
}

export default App
