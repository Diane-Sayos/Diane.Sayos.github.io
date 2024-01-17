import './Projects.css';

import SpecificProject from './SpecificProject';
//Jamzzz images
import JammingHome from '../../images/jammming-homepage.png';
import JammingSearch from '../../images/jammming-search.png';
import JammingAdd from '../../images/jammming-addplaylist.png';
import JammingEdit from '../../images/jammming-editplaylist.png';
//planner images
import PlannerAppointmentPage from '../../images/planner-home.png';
import PlannerAppointmentForm from '../../images/planner-form.png';
import PlannerContactPage from '../../images/planner-contactPage.png';
import PlannerContactForm from '../../images/planner-contactFrom.png';
//spark-chat images

//the scratching post images

//thirsty international images

//redditrand images

//ravenous images

//gizmo systems images

//petlover images
import PetloverHome from '../../images/petlover-home.png';
import PetloverSearch from '../../images/petlover-search.png';
import PetloverCategory from '../../images/petlover-category.png';
import PetloverError from '../../images/petlover-error.png';
import PetloverSpecific from '../../images/petlover-specificPage.png';


const Projects = () => {
    const projects = [
        {
            name: "The Scratching Post",
            images: [],
            description: "A Social Media Platform that lets users post pictures with captions, message and video call with each other in realtime.",
            link: "https://github.com/Diane-Sayos/The-Scratching-Post",
        },
        {
            name: "Spark Chat",
            images: [],
            description: "A Social Media Platform that lets users post with images, and send each other messages in realtime",
            link: "https://github.com/Diane-Sayos/Spark_Chat",
        },
        {
            name: "Thirsty International",
            images: [],
            description: "An E-Commerce Platform that lets you buy exotic drinks found all over the world.",
            link: "https://github.com/Diane-Sayos/Thirsty_International",
        },
        {
            name: "Gizmo Systems",
            images: [],
            description: "An enrollment platform that lets users add / edit / delete universities. Allows users to register students and enroll or remove student from universities.",
            link: "https://github.com/Diane-Sayos/Gizmo-Systems",
        },
        {
            name: "RedditRand",
            images: [],
            description: "",
            link: "https://github.com/Diane-Sayos/RedditRand",
        },
        {
            name: 'Ravenous',
            images: [],
            description: "An application that let's you search for restaurants based on categories in an area using Yelp API.",
            link: "https://github.com/Diane-Sayos/ravenous",
        },
        {
            name: 'Jamzzz',
            images: [JammingHome, JammingSearch, JammingAdd, JammingEdit],
            description: "An application that lets you create your own playlist and add it to your spotify account.",
            link: 'https://github.com/Diane-Sayos/Jammming',
        },
        {
            name: "Appointment Planner",
            images: [PlannerAppointmentPage, PlannerAppointmentForm, PlannerContactPage, PlannerContactForm],
            description: "An application that let's you add Contacts and Appointments made possible using create-react-app.",
            link: "https://github.com/Diane-Sayos/appointment-planner",
        },
        {
            name: "Petlover",
            images: [PetloverHome, PetloverSearch, PetloverCategory, PetloverSpecific, PetloverError],
            description: "An adoption website that lets users view all the animal listings of available pets that are up for adoption.",
            link: "https://github.com/Diane-Sayos/react-routers",
        },
    ]

    return (
        <section className="projects">
            <h2>PROJECTS</h2>
            {projects.map((project) => {
                return (
                    <SpecificProject project={project} />
                )
            })}
        </section>
    )
};

export default Projects;