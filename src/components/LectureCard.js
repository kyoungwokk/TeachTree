import React from "react";


const LectureCard = ({lecture}) => {

    return(
        <div className='lecture-card'>
            <div className='image-container'>
                <img src='front.png' alt={lecture.title} className='lecture-image'/>
            </div>
            <h3>{lecture.title}</h3>
            <p className='p-margin'>{lecture.description}</p>
            <div className='lecture-icons'>
                <span>♡ 0</span>
                <span>🛒</span>
            </div>
        </div>
    )
}

export default LectureCard