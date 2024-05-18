import React, { Children } from 'react'
import NavigationItem from './NavigationItem'
import { navigateItems } from './data/navlink'
import NavBtn from './header/NavBtn'
import NavLogo from './header/NavLogo'


const navLists = navigateItems.map((item, index) => {
    return (
        <NavigationItem key={index} href={item.href} label={item.label} />
    )
})
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLogo />
                    <NavBtn />
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {navLists}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar