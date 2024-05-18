import React from 'react'
import HeroBtn from './hero/HeroBtn'

const Hero = () => {
    return (
        <>
            <section className="px-4 py-5 my-5 text-center  position-relative " >

                <img src="https://i.ibb.co/Qdp7XSr/arsalan.png" alt="arsalan" border="0"
                    className='d-block mx-auto mb-4'
                    style={{
                        width: '10%',
                        height: '10%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '50%',
                        boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.2)',


                    }}
                />

                <h1 className="display-5 fw-bold text-body-emphasis">Crafting Exceptional Web Experiences</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Hi, I'm <b>Sharjeel Ahmed</b> , a passionate Web Developer dedicated to turning ideas into stunning digital realities.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <HeroBtn />

                    </div>
                </div>

                {/* shape divider */}


            </section>

        </>
    )
}

export default Hero