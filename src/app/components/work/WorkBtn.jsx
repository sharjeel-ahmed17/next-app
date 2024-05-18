"use client"
import Link from 'next/link'


const WorkBtn = ({ href, link }) => {
    return (
        <Link href={href} target="_blank" className='btn btn-primary'>
            {link}

        </Link>
    )
}

export default WorkBtn