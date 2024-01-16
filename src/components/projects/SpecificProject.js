import './Projects.css';

import ImageCarousel from './ImageCarousel';

const SpecificProject = ({ project }) => {
    return (
        <article className="specific-project">
            <h3>{project.name}</h3>
            <ImageCarousel images={project.images}/>
            <p>{project.description}</p>
        </article>
    )
};

export default SpecificProject;