import './Home.css';

import cssPic from '../../images/css.png';
import expressPic from '../../images/express.png';
import htmlPic from '../../images/html.png';
import jsPic from '../../images/js.png';
import materialuiPic from '../../images/materialui.png';
import nodePic from '../../images/nodejs.png';
import npmPic from '../../images/npm.png';
import reactPic from '../../images/react.png';
import reduxPic from '../../images/redux.png';
import yarnPic from '../../images/yarn.png';
import gitPic from '../../images/git.png';
import githubPic from '../../images/github.jpeg';
import postgresqlPic from '../../images/postgres.jpeg';
import vscodePic from '../../images/vscode.png';

const Home = () => {
    return (
        <section className="home">
        <article className="personal-info">
            <h3>Personal Information</h3>
            <strong>Email:</strong>
            <p>dianesayosbriones@gmail.com</p>
            <strong>Phone Number:</strong>
            <p>1 (347) 348 - 7287</p>
            <strong>LinkedIn:</strong>
            <p>https://www.linkedin.com/in/diane-sayos-briones/</p>
            <strong>Github:</strong>
            <p>https://github.com/Diane-Sayos</p>
        </article>
        <article className="education">
            <h3>Education</h3>
            <div className="card">
                <strong>Hunter College - CUNY</strong>
                <p>Bachelor of Arts in Dance, Minor in Psychology</p>
                <p>Dean's List'</p>
            </div>
            <div className="card">
                <strong>Fullstack Academy</strong>
                <p>Web Development - PERN Stack</p>
            </div>
        </article>
        <h3>Tech Stack</h3>
        <article className="tech-stack">
            <div className="stack-container">
                <img src={jsPic} alt="Javascript" />
            </div>
            <div className="stack-container">
                <img src={htmlPic} alt="HTML 5" />
            </div>
            <div className="stack-container">
                <img src={cssPic} alt="CSS 3" />
            </div>
            <div className="stack-container">
                <img src={nodePic} alt="Node JS" />
            </div>
            <div className="stack-container">
                <img src={expressPic} alt="Express JS" />
            </div>
            <div className="stack-container">
                <img src={reactPic} alt="React" />
            </div>
            <div className="stack-container">
                <img src={reduxPic} alt="Redux" />
            </div>
            <div className="stack-container">
                <img src={materialuiPic} alt="Material UI" />
            </div>
            <div className="stack-container">
                <img src={postgresqlPic} alt="PostgreSQL" />
            </div>
            <div className="stack-container">
                <img src={gitPic} alt="Git" />
            </div>
            <div className="stack-container">
                <img src={githubPic} alt="Github" />
            </div>
            <div className="stack-container">
                <img src={vscodePic} alt="VS Code" />
            </div>
            <div className="stack-container">
                <img src={npmPic} alt="npm" />
            </div>
            <div className="stack-container">
                <img src={yarnPic} alt="yarn" />
            </div>
        </article>
    </section>
    )
};

export default Home;