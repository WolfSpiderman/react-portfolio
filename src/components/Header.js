import React from 'react'
import Navigation from './Navigation';

export default function Header() {
    return (
        <header className='d-flex flex-row justify-content-between align-items-center'>
            <h1>Joshua Jenkins</h1>
            <Navigation />
        </header>
    )
};