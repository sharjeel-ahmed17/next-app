"use client"

import Link from "next/link"

const HeroBtn = () => {
    return (
        <Link href="#work">

            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" >
                View My Work
            </button>
        </Link>
    )
}

export default HeroBtn