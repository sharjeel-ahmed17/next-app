import React from 'react'
import TestimonialList from './TestimonialList'
import { testimoniallistItem } from '../data/testimonialData';

const testimonialDataList = testimoniallistItem.map((item, index) => {
    const { name, imgUrl, des } = item;
    return <TestimonialList
        key={index}
        name={name}
        imgUrl={imgUrl}
        des={des}


    />

})


const Testimonial = () => {
    return (
        <div className="container mx-auto my-4">
            <h2 className="text-center" id="testimonial">testimonial</h2>
            <div className="row">



                {testimonialDataList}

            </div>
        </div>
    )
}

export default Testimonial