import React from 'react';
import Projectcard from './Projectcard';
import WorkCardData from './WorkCardData';


const Work = () => {
    return (
        <div className='projectcard'>
            <h1 className='project-title'>Latest Projects</h1>
            <div className='project-container'>
                {WorkCardData.map((val, ind) => {
                    return (
                        <Projectcard
                            key={ind}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            details={val.details}
                            link={val.link} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;
