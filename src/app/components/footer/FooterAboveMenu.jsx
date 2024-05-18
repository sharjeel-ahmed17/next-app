import React from 'react'

const footerMenuList = [
    {
        name: "usman"
    },
    {
        name: "Moin"
    },
    {
        name: "gufran"
    },
    {
        name: "kashan"
    },
    {
        name: "arsalan"
    },
    {
        name: "ashar"
    },
]


const footerMenu = footerMenuList.map((item, index) => {
    const { name } = item;
    return (
        <div className="col-lg-2 col-md-4 d-flex justify-content-center bg-blue p-2">{name}</div>
    )
})
const FooterAboveMenu = () => {
    return (
        <div className="container mx-auto my-4">
            <div className="row mx-auto">
                {footerMenu}
            </div>
        </div>
    )
}
export default FooterAboveMenu