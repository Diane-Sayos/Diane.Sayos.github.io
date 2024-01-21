import './Certifications.css';

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
                <div className="card">
                    <div className="cert-container">
                        <img src={fullstack} alt="Fullstack Certificate" />
                    </div>
                    <h3>Fullstack Academy</h3>
                    <p>Web Development Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={forage} alt="Forage Certificate" />
                    </div>
                    <h3>Forage</h3>
                    <p>Software Engineering Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={aws} alt="AWS S3 Certificate" />
                    </div>
                    <h3>Coursera</h3>
                    <p>AWS S3 Basics Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={versionControl} alt="Version Control Certificate" />
                    </div>
                    <h3>Coursera</h3>
                    <p>Version Control Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={js} alt="Javascript Certificate" />
                    </div>
                    <h3>Coursera</h3>
                    <p>Javascript Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={reactCert} alt="React Certificate" />
                    </div>
                    <h3>Coursera</h3>
                    <p>React Basics Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={reactCourse} alt="React Certificate" />
                    </div>
                    <h3>Codecademy</h3>
                    <p>React Course Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={backend} alt="Backend Certificate" />
                    </div>
                    <h3>Coursera</h3>
                    <p>Introduction to Back-End Development Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={introFrontend} alt="FrontEnd Certificate" />
                    </div>
                    <h3>Coursera</h3>
                    <p>Introduction to Front-End Development Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={frontend} alt="Front End Certificate" />
                    </div>
                    <h3>Codecademy</h3>
                    <p>Create a Front-End App with React Certificate</p>
                </div>
                <div className="card">
                    <div className="cert-container">
                        <img src={githubPage} alt="Github Pages Certificate" />
                    </div>
                    <h3>Codecademy</h3>
                    <p>Build a Website with HTML, CSS, and Github Pages Certificate</p>
                </div>
            </div>
        </section>
    )
};

export default Certifications;