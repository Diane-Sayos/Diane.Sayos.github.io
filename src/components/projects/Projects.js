import './Projects.css';

import SpecificProject from './SpecificProject';

import homePage from '../../images/homepage-jammming.png';
import searchPage from '../../images/search-jammming.png';
import addPage from '../../images/addplaylist-jammming.png';
import editPage from '../../images/editplaylist-jammming.png';


const Projects = () => {
    const projects = [
        {
            name: 'Jamminggg',
            images: [homePage, searchPage, addPage, editPage],
            description: 'daashasfg djfhdfjh djfhdfj dfdhfjd reh asdjahsjha',
        }
    ]
    return (
        <section className="projects">
            <h2>Projects</h2>
            <SpecificProject project={projects[0]}/>
        </section>
    )
};

export default Projects;