import React from 'react'

const TeamPlayer = ({ name, imgUrl, position }) => {
    return (
        <>
            <div class="col-lg-3 py-4 mx-auto">
                <div class="image-container">
                    <img src={imgUrl} alt="" class="profile-image" />
                    <div class="overlay1">
                        <div className='d-flex  justify-content-center  align-content-center flex-column '>

                            <p class="name" className='text-center text-light fw-bold '>{name}</p>
                            <p className='text-center text-danger '>{position}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamPlayer