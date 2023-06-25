import React from 'react'
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header className='d-flex flex-row justify-content-between align-items-center'>
            <h1>Joshua Jenkins</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
    )
};