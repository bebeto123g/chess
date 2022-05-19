import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../UI/Container/Container'

const Header = () => {
    return (
        <div className='header'>
            <Container className='header-wrapper'>
                <Link to={'/'}>Игра</Link>
                <Link to={'/knight'}>Про кона</Link>
            </Container>
        </div>
    )
}

export default Header
