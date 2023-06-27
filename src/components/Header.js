import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header className='d-flex flex-row justify-content-between align-items-center' style={{ height: 200, backgroundImage: 'linear-gradient(144deg, #ecc66c, #4e5885 45%, #bc5032)', marginBottom: 20, paddingLeft: 10 }}>
            <h1 style={{ fontSize: 72 }}>Joshua Jenkins</h1>
            <div className="align-self-start">
              <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
        </header>
    );
}
