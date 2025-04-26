import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'

import PageLoader from './UI/Loader/PageLoader'
import AppContainer from './UI/Container/AppContainer'
import Header from './components/Header'
import Container from './UI/Container/Container'

const App = () => {
    const appRoutes = useRoutes(routes)

    return (
        <>
            <Header />
            <AppContainer>
                <Container>
                    <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
                </Container>
            </AppContainer>
        </>
    )
}

export default App
