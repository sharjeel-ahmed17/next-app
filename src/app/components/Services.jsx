import React from 'react'
import ServiceBtn from './services/ServiceBtn'

const Services = ({ imageUrl, title, description }) => {
    return (
        <>
            <div className="col-lg-6 py-4">
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." style={{
                        height: "300px"
                    }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>


                        <ServiceBtn />

                    </div>
                </div>

            </div>

        </>
    )
}

export default Services