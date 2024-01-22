import './Home.css';

import colton from '../../images/testimonials/coltonpomeroy.png';
import erik from '../../images/testimonials/erikblaney.png';
import key from '../../images/testimonials/keycayetano.png';
import alejandro from '../../images/testimonials/alejandroloja.png';
import bob from '../../images/testimonials/bobsaludo.png';

const testimonies = [
    {
        name: 'Colton Pomeroy',
        position: 'Teacher',
        review: 'It was a pleasure working with Diane at Fullstack Academy. Over the course of approximately six months, she went from being a beginner to being a proficient full stack Javascript developer. Diane worked successfully both individually and as a member of a team to complete all course objectives. She was also an active participant in in-class lectures, asking insightful questions that benefited the entire class. I have no doubt Diane would be an incredible asset to any engineering organization.',
        picture: colton
    },
    {
        name: 'Erik Blaney',
        position: 'Teammate',
        review: 'I had the pleasure of getting to work together with Diane on our capstone project at Fullstack Academy. She was quick to hit the ground running when we were assigned to work together. I was impressed with how quickly she built up our app infrastructure and database, and with how many features she brought to our social media app "The Scratching Post". Diane taught me a lot about the nuanced differences between class, and functional, components in ReactJS and I am a better coder now having worked with her. I know Diane will be a great benefit to any development team she finds herself a part of going forward.',
        picture: erik
    },
    {
        name: 'Kristina Marie Key Cayetano',
        position: 'Mentor',
        review: "No doubt, Diane has become a great Software Engineer. I got the chance to be her mentor when she was studying at Fullstack Academy, an intensive coding bootcamp for aspiring Fullstack Software Engineer. I've witnessed her tremendous growth learning HTML to building and deploying a web application. Diane is selfless and seeks not what's best for herself, but what's good for the project. She puts on extra work when needed and makes good judgement all around, especially when prioritizing feature works. For example, when they were building an e-commerce app, she broke down the steps to get the MVP product, and prioritized tasks needed to be done first. And when the deadline was coming up, an unexpected bad merge broke their app, but she calmly took on the responsibility of fixing the merge conflict and communicated to the team what went wrong and the approach she took to solve it. Diane has also demonstrated strong inclusivity and communication skills throughout the coding bootcamp. She listened well to her team, and was able to adapt her communication style when explaining technology to less or more experienced developer. She also demonstrated and provided working example to help her teammates and classmates understand the implementation of their project. Aside from soft skills, Diane has also built multiple full-stack application which proves her amazing HTML, CSS, Javascript, and SQL skills. Another thing that always amaze me is her CSS expertise to build animated web components from scratch. On one of their project, she was in charge of the presentation layer, and she was able to make the app beautiful, responsive, and animated w/o the use of pre-defined UI component library or bootstrap...only pure CSS!",
        picture: key
    },
    {
        name: 'Alejandro Loja',
        position: 'Teammate',
        review: "I had the pleasure to work with Diane on our first team project at Fullstack academy. I was inspired her understanding of what needed to be done, low and high level. She was great to work with and motivated in the team to stay on course. From this, I understood, not only does Diane have the technical ability but the drive needed to become a successful developer.",
        picture: alejandro
    },
    {
        name: 'Bob Saludo',
        position: 'Teammate',
        review: "Working with Diane has been a pleasure. She can pick things up quickly and start building things immediately. If she ever gets stuck, she finds a way to get through the issue with the resources she has. If that resource is other people, she is not hesitant to get help and gain insight from a teammate while helping other teammates with their issues. Diane is an asset to any group that she works with. She poses questions that can help redirect a team's focus and keep us on board with what we need to do to progress. I can learn a lot from her focus.",
        picture: bob
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>TESTIMONIALS</h2>
            {
                testimonies.map(testimony => {
                    return (
                        <article className='testimony' key={testimony.name}>
                            <div className='testimony-image-container'>
                                <img src={testimony.picture} alt="avatar" />
                            </div>
                            <h4>{testimony.name}</h4>
                            <p>{testimony.position}</p>
                            <p>{testimony.review}</p>
                        </article>
                    )
                })
            }
        </section>
    )
};

export default Testimonials;