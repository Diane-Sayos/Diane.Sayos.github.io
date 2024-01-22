import './Home.css';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import cssPic from '../../images/techstack/css.png';
import expressPic from '../../images/techstack/express.png';
import htmlPic from '../../images/techstack/html.png';
import jsPic from '../../images/techstack/js.png';
import materialuiPic from '../../images/techstack/materialui.png';
import nodePic from '../../images/techstack/nodejs.png';
import npmPic from '../../images/techstack/npm.png';
import reactPic from '../../images/techstack/react.png';
import reduxPic from '../../images/techstack/redux.png';
import yarnPic from '../../images/techstack/yarn.png';
import gitPic from '../../images/techstack/git.png';
import githubPic from '../../images/techstack/github.jpeg';
import postgresqlPic from '../../images/techstack/postgres.jpeg';
import vscodePic from '../../images/techstack/vscode.png';

const Techstack = () => {
    return (
        <section className="techstack">
            <h2>TECH STACK</h2>
            <article className="tech-stack">

             {/* Javascript */}
                <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={jsPic}
                        alt="Javascript"
                    />
                </Card>

             {/* HTML */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={htmlPic}
                        alt="HTML 5"
                    />
                </Card>

             {/* CSS */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={cssPic}
                        alt="CSS 3"
                    />
                </Card>

             {/* Node */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={nodePic}
                        alt="Node JS"
                    />
                </Card>

             {/* Express */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={expressPic}
                        alt="Express JS"
                    />
                </Card>

             {/* React */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={reactPic}
                        alt="React"
                    />
                </Card>

             {/* Redux */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={reduxPic}
                        alt="Redux"
                    />
                </Card>

             {/* Material UI */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={materialuiPic}
                        alt="Material UI"
                    />
                </Card>

             {/* Postgresql */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={postgresqlPic}
                        alt="PostgreSQL"
                    />
                </Card>

             {/* Git */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={gitPic}
                        alt="Git"
                    />
                </Card>

             {/* Github */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={githubPic}
                        alt="Github"
                    />
                </Card>

             {/* CSS */}
             <Card raised sx={{width:200, height:130, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m:0, p:0, width:"100%", objectFit:"fill", height:"100%", borderRadius:"1em",}}
                        component="img"
                        image={cssPic}
                        alt="CSS 3"
                    />
                </Card>

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