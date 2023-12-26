import './Footer.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {
    
    return (
        <section className="footer">
            <div className="linkedin-container" onClick={() => window.open("https://www.linkedin.com/in/diane-sayos-briones/", "_blank")}>
                <LinkedInIcon />
            </div>
            <div className="github-container" onClick={() => window.open("https://github.com/Diane-Sayos", "_blank")}>
                <GitHubIcon />
            </div>
        </section>
    )
};

export default Footer;