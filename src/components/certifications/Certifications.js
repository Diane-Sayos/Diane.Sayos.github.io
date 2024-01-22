import './Certifications.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import fullstack from '../../images/certifications/FullstackCertificate.png';
import aws from '../../images/certifications/Coursera-AWS.png';
import forage from '../../images/certifications/ForageCert.png';
import js from '../../images/certifications/Coursera-JS.png';
import reactCert from '../../images/certifications/Coursera-React.png';
import githubPage from '../../images/certifications/githubpages.png';
import frontend from '../../images/certifications/Codecademy-frontend.png';
import backend from '../../images/certifications/Coursera-BackEnd.png';
import versionControl from '../../images/certifications/Coursera-VersionControl.png';
import introFrontend from '../../images/certifications/Coursera-FrontEnd.png';
import reactCourse from '../../images/certifications/Codecademy-react.png';

const Certifications = () => {
    return (
        <section className="certifications">
            <h2>CERTIFICATIONS</h2>
            <div className="cards">

             {/* Fullstack Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={fullstack}
                        alt="Fullstack Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Fullstack Academy
                        </Typography>
                        <Typography variant="body2" color="#7f5539">
                            Web Development Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Forage Certificate */}
                <Card raised sx={{width:300, height:320,p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={forage}
                        alt="Forage Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Forage
                        </Typography>
                        <Typography variant="body2" color="#7f5539">
                            Software Engineering Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* AWS S3 Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={aws}
                        alt="AWS S3 Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539">
                            AWS S3 Basics Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Version Control Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={versionControl}
                        alt="Version Control Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539">
                            Version Control Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Javascript Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={js}
                        alt="Javascript Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539">
                            Javascript Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* React Basics Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={reactCert}
                        alt="React Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539" >
                            React Basics Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* React Course Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={reactCourse}
                        alt="React Course Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Codecademy
                        </Typography>
                        <Typography variant="body2" color="#7f5539" >
                            React Course Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Introduction to Back-End Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={backend}
                        alt="Backend Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539">
                            Introduction to Back-End Development Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Introduction to Front-End Certificate */}
                <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={introFrontend}
                        alt="FrontEnd Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539" >
                            Introduction to Front-End Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Create a Front-End App with React Certificate */}
             <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={frontend}
                        alt="Front End Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Codecademy
                        </Typography>
                        <Typography variant="body2" color="#7f5539" >
                            Create a Front-End App with React Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* Github Pages Certificate */}
             <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={githubPage}
                        alt="Github Pages Certificate"
                    />
                    <CardContent sx={{margin:"10px", p:0}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Codecademy
                        </Typography>
                        <Typography variant="body2" color="#7f5539" >
                            Build a Website with HTML, CSS, and Github Pages Certificate
                        </Typography>
                    </CardContent>
                </Card>

             {/* extra card Certificate */}
             <Card raised sx={{width:300, height:320, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
                    <CardMedia
                        sx={{m: "10px auto", p:"10px", width:250, objectFit:"fill", height:200, border:"0.5px solid #b08968", borderRadius:"1em",}}
                        component="img"
                        image={reactCert}
                        alt="React Certificate"
                    />
                    <CardContent sx={{margin:"10px"}}>
                        <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                            Coursera
                        </Typography>
                        <Typography variant="body2" color="#7f5539" >
                            React Basics Certificate
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
};

export default Certifications;