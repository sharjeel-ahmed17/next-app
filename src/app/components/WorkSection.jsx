import React from 'react'
import Work from './Work'
import { workData } from './data/workData';


const workDataList = workData.map((item, index) => {
    const { imageUrl, title, description, link, href } = item;
    return <Work
        key={index}
        imageUrl={imageUrl}
        title={title}
        description={description}
        link={link}
        href={href}

    />
})
const WorkSection = () => {
    return (
        <>
            <div className="container">
                <h2 className="text-center text-capitalize " id="work">work</h2>

                <div className="row">
                    {workDataList}
                </div>
            </div>
        </>
    )
}

export default WorkSection