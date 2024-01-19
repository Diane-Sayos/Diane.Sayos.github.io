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

const Techstack = () => {
    return (
        <section className="techstack">
            <h2>TECH STACK</h2>
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

export default Techstack;