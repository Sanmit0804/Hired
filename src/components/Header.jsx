import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
    return (
        <nav className='py-4 flex justify-between items-center'>
            <Link>
                <span className='p-10'>Hired</span>
            </Link>
            <Button variant={'outline'}>Login</Button>
        </nav>
    )
}

export default Header