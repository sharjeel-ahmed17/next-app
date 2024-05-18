"use client"

import Link from 'next/link'


const NavigationItem = ({ href, label }) => {
    return (
        <>


            <li className='nav-item'>
                <Link href={href}>
                    <span className='nav-link'>{label}</span>
                </Link>
            </li>
        </>
    )
}

export default NavigationItem