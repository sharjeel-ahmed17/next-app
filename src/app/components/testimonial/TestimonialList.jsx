import React from 'react'

const TestimonialList = ({ name, imgUrl, des }) => {
    return (
        <div className="col-lg-3 py-4">
            <div className='tetimonial-image overlay'>

                <img src={imgUrl} alt=""
                />
                <div className="overlay-content">
                    <p>{name}</p>
                    <p>{des}</p>
                </div>

            </div>
        </div>
    )
}

export default TestimonialList