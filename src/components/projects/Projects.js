import './Projects.css';

import SpecificProject from './SpecificProject';

//Jamzzz images
import JammingHome from '../../images/jammming/homepage.png';
import JammingSearch from '../../images/jammming/search.png';
import JammingAdd from '../../images/jammming/addplaylist.png';
import JammingEdit from '../../images/jammming/editplaylist.png';

//planner images
import PlannerAppointmentPage from '../../images/planner/home.png';
import PlannerAppointmentForm from '../../images/planner/form.png';
import PlannerContactPage from '../../images/planner/contactPage.png';
import PlannerContactForm from '../../images/planner/contactFrom.png';

//spark-chat images
import ChatHome from '../../images/sparkchat/landingpage.png';
import ChatSignup from '../../images/sparkchat/signup.png';
import ChatFeed from '../../images/sparkchat/feed.png';
import ChatProfilepage from '../../images/sparkchat/profilepage.png';
import ChatSpecificpage from '../../images/sparkchat/specificpage.png';
import ChatMessage from '../../images/sparkchat/chat.png';
import ChatUpdateavatar from '../../images/sparkchat/editavatar.png';
import ChatUpdateprofile from '../../images/sparkchat/editprofile.png';

//the scratching post images
import PostFeed from '../../images/scratchingpost/feed.png';
import PostProfile from '../../images/scratchingpost/profilepage.png';
import PostFollowers from '../../images/scratchingpost/followers.png';
import PostDarkMode from '../../images/scratchingpost/darkmode.png';
import PostComment from '../../images/scratchingpost/comment.png';
import PostMessages from '../../images/scratchingpost/messages.png';
import PostVideocall from '../../images/scratchingpost/videocall.png';
import PostFriends from '../../images/scratchingpost/friends.png';
import PostPictures from '../../images/scratchingpost/pictures.png';
import PostPosts from '../../images/scratchingpost/posts.png';
import PostSpecific from '../../images/scratchingpost/specificpage.png';
import PostUpdateProfile from '../../images/scratchingpost/updateprofile.png';
import PostSignup from '../../images/scratchingpost/signup.png';
import PostPost from '../../images/scratchingpost/post.png';
import PostFollowing from '../../images/scratchingpost/following.png';
import PostSearch from '../../images/scratchingpost/search.png';
import PostShare from '../../images/scratchingpost/share.png';

//thirsty international images
import ThirstyHome from '../../images/thirsty/landingpage.png';
import ThirstyProducts from '../../images/thirsty/productspage.png';
import ThirstyUsers from '../../images/thirsty/userspage.png';
import ThirstyProfile from '../../images/thirsty/profile.png';
import ThirstyUpdateCredentials from '../../images/thirsty/updatecredentials.png';
import ThirstyUpdateProfile from '../../images/thirsty/updateprofile.png';
import ThirstyCart from '../../images/thirsty/cart.png';
import ThirstyCheckout from '../../images/thirsty/stripecheckout.png';
import ThristyStripeCart from '../../images/thirsty/stripecartlist.png';
import ThirstyStripeSuccessful from '../../images/thirsty/stripesuccessful.png';

//redditrand images

//ravenous images
import RavenousHome from '../../images/ravenous/home.png';
import RavenousSearch from '../../images/ravenous/search.png';

//gizmo systems images
import GizmoHome from '../../images/gizmosystems/landingpage.png';
import GizmoStudents from '../../images/gizmosystems/studentspage.png';
import GizmoCampuses from '../../images/gizmosystems/campuspage.png';
import GizmoStudentSpecific from '../../images/gizmosystems/studentspecific.png';
import GizmoCampusSpecific from '../../images/gizmosystems/campusspecific.png';
import GizmoSearch from '../../images/gizmosystems/search.png';

//petlover images
import PetloverHome from '../../images/petlover/home.png';
import PetloverSearch from '../../images/petlover/search.png';
import PetloverCategory from '../../images/petlover/category.png';
import PetloverError from '../../images/petlover/error.png';
import PetloverSpecific from '../../images/petlover/specificPage.png';


const Projects = () => {
    const projects = [
        {
            name: "The Scratching Post",
            images: [PostSignup, PostFeed, PostComment, PostFriends, PostDarkMode, PostShare, PostSearch, PostSpecific, PostProfile, PostPost, PostUpdateProfile, PostFollowers, PostFollowing, PostPictures, PostPosts, PostMessages, PostVideocall],
            description: "A Social Media Platform that lets users post pictures with captions, message and video call with each other in realtime.",
            link: "https://github.com/Diane-Sayos/The-Scratching-Post",
        },
        {
            name: "Spark Chat",
            images: [ChatHome, ChatSignup, ChatFeed, ChatProfilepage, ChatUpdateavatar, ChatUpdateprofile, ChatSpecificpage, ChatMessage],
            description: "A Social Media Platform that lets users post with images, and send each other messages in realtime",
            link: "https://github.com/Diane-Sayos/Spark_Chat",
        },
        {
            name: "Thirsty International",
            images: [ThirstyHome, ThirstyUsers, ThirstyProfile, ThirstyUpdateCredentials, ThirstyUpdateProfile, ThirstyProducts, ThirstyCart, ThirstyCheckout, ThristyStripeCart, ThirstyStripeSuccessful],
            description: "An E-Commerce Platform that lets you buy exotic drinks found all over the world.",
            link: "https://github.com/Diane-Sayos/Thirsty_International",
        },
        {
            name: "Gizmo Systems",
            images: [GizmoHome, GizmoSearch, GizmoStudents, GizmoStudentSpecific, GizmoCampuses, GizmoCampusSpecific],
            description: "An enrollment platform that lets users add / edit / delete universities. Allows users to register students and enroll or remove student from universities.",
            link: "https://github.com/Diane-Sayos/Gizmo-Systems",
        },
        // {
        //     name: "RedditRand",
        //     images: [],
        //     description: "",
        //     link: "https://github.com/Diane-Sayos/RedditRand",
        // },
        {
            name: 'Ravenous',
            images: [RavenousHome, RavenousSearch],
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
            <p>Click on each project's title to go to their respective github repository.</p>
            {projects.map((project) => {
                return (
                    <SpecificProject project={project} />
                )
            })}
        </section>
    )
};

export default Projects;