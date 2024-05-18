import React from 'react'
import Services from './Services'

const servicesData = [
    {
        imageUrl: 'https://truecourse.ca/wp-content/uploads/2022/04/Truecourse-Website-Graphics-Services-2022_Services-graphic-design.png',
        title: 'Custom Web Development',
        description: 'I create bespoke websites tailored to your unique needs, ensuring a seamless and engaging user experience.'
    },
    {
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQEYixI4x5YQqg/article-cover_image-shrink_600_2000/0/1690355201650?e=2147483647&v=beta&t=iYL3_l1byBcILYECC8ABcj59ksZ10yjVIdAX1wiGUf8',
        title: 'Responsive Design',
        description: 'All my designs are fully responsive, providing an optimal viewing experience across all devices.'
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3eRwSy18wj6jMYq4qB1lMk2q2A6W7RmBvjnztTDBgbQ&s',
        title: 'E-commerce Solutions',
        description: 'I develop robust e-commerce platforms that help you sell your products and services online effortlessly.'
    },
    {
        imageUrl: 'https://cdn.candidroot.com/website_candidroot/static/src/svg/wordpress_development.jpg',
        title: 'SEO Optimization',
        description: 'Improve your website’s visibility on search engines with my comprehensive SEO services.'
    },

];

const ServiceSection = () => {
    return (
        <>
            <div className="container mx-auto mt-4">
                <h2 className="text-center text-capitalize " id="service">My Services</h2>
                <div className="row w-75 mx-auto">
                    {/* Map through the servicesData array and render Services component for each service */}
                    {servicesData.map((service, index) => (
                        <Services
                            key={index}
                            imageUrl={service.imageUrl}
                            title={service.title}
                            description={service.description}
                        />
                    ))}


                </div>
            </div>
        </>
    )
}

export default ServiceSection