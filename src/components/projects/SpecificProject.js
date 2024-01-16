import './Projects.css';

import ImageCarousel from './ImageCarousel';

const SpecificProject = ({ project }) => {
    return (
        <article className="specific-project">
            <h3><a href={project.link} target="_blank" rel="noreferrer">{project.name}</a></h3>
            <ImageCarousel images={project.images}/>
            <br />
            <div className='description'>
            <p>{project.description}</p>
            </div>
        </article>
    )
};

export default SpecificProject;