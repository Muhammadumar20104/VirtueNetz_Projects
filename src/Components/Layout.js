import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Layout() {
    return (
        <>
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <Header />
                </div>
                <div className='flex w-full h-full'>
                <Outlet />
                </div>
                <div className='flex flex-col '>
                    <Footer />
                </div>
            </div>
        </>


    )
}

export default Layout