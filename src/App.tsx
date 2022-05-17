import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/routes'

import PageLoader from './UI/Loader/PageLoader'
import AppContainer from './UI/Container/AppContainer'
import { Link } from 'react-router-dom'
import Container from './UI/Container/Container'

const App = () => {
    const appRoutes = useRoutes(routes)

    return (
        <>
            <Container>
                <Link to={'/'}>Игра</Link>
                <Link to={'/knight'}>Про кона</Link>
            </Container>
            <AppContainer>
                <Suspense fallback={<PageLoader />}>{appRoutes}</Suspense>
            </AppContainer>
        </>
    )
}

export default App
