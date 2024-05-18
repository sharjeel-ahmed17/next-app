import WorkBtn from "./work/WorkBtn"



const Work = ({ imageUrl, title, description, link, href }) => {
    return (
        <>
            <div className="col-lg-6 d-flex justify-content-center py-4 overlay">
                <img src={imageUrl} alt="" className="w-100" />
                <div className="overlay-content">
                    <h3>{title}</h3>
                    <br />
                    <p>{description}</p>
                    <WorkBtn link={link} href={href} />
                </div>
            </div>
        </>
    )
}

export default Work