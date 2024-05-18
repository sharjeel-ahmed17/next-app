import React from 'react'
let myName = "Sharjeel Ahmed"
const FooterBelow = () => {
    return (
        <div className="bg-primary">

            <div className="container-fluid mx-auto">
                <div className="d-flex align-content-center  justify-content-center p-4  text-bg-primary text-capitalize ">

                    <footer className='mx-auto text-center '>

                        <p>

                            © 2024 {myName}. All rights reserved.
                        </p>
                        <p>

                            Website designed and developed by {myName}.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default FooterBelow