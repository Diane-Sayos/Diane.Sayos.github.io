import './Projects.css';

import ImageCarousel from './ImageCarousel';

const SpecificProject = ({ project }) => {
    return (
        <article className="specific-project-card">
            <h3><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></h3>
            <div className="carousel-container">
                <ImageCarousel images={project.images}/>
            </div>
            <br />
            <div className='description'>
            <p>{project.description}</p>
            </div>
        </article>
    )
};

export default SpecificProject;