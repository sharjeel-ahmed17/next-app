import React from 'react'
import FooterAboveMenu from './FooterAboveMenu'
import FooterBelow from './FooterBelow'

const Footer = () => {
    return (
        <>
            {/* <FooterAboveMenu /> */}

            {/* contact information */}

            {/* follow me */}
            {/* quick links */}

            {/* footer above menu */}
            <div className="container mx-auto">
                <div className="row mx-auto">
                    <div className="col-md-4  ">
                        <h4 className='fw-bold text-uppercase'>contact information</h4>
                        <p className='m-0 p-0'>Email: youremail@example.com</p>
                        <p className='m-0 p-0'>Phone: (123) 456-7890</p>
                        <p className='m-0 p-0'>Address: 123 Web Developer Lane, Tech City, TX 12345

                        </p>
                    </div>
                    <div className="col-md-4  ">
                        <h4 className='fw-bold text-uppercase'>Follow Me
                        </h4>
                        <p className='m-0 px-0'>LinkedIn: linkedin.com/in/yourprofile</p>
                        <p className='m-0 px-0'>Twitter: twitter.com/yourprofile</p>
                        <p className='m-0 px-0'>GitHub: github.com/yourprofile</p>
                        <p className='m-0 px-0'>Instagram: instagram.com/yourprofile

                        </p>
                    </div>
                    <div className="col-md-4  ">
                        <h4 className='fw-bold text-uppercase'>Quick Links</h4>
                        <p className='m-0 p-0'>home</p>
                        <p className='m-0 p-0'>About</p>
                        <p className='m-0 p-0'>services

                        </p>
                    </div>

                </div>
            </div>

            <FooterBelow />
        </>
    )
}

export default Footer