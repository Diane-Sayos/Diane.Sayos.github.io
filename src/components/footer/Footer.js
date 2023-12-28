import './Footer.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    
    return (
        <section className="footer">
            <div className="linkedin-container" onClick={() => window.open("https://www.linkedin.com/in/diane-sayos-briones/", "_blank")}>
                <LinkedInIcon />
            </div>
            <div className="github-container" onClick={() => window.open("https://github.com/Diane-Sayos", "_blank")}>
                <GitHubIcon />
            </div>
            <div className="facebook-container" onClick={() => window.open("https://www.facebook.com/dianenazares", "_blank")}>
                <FacebookIcon />
            </div>
            <div className="instagram-container" onClick={() => window.open("https://www.instagram.com/_divineheart_/", "_blank")}>
                <InstagramIcon />
            </div>
        </section>
    )
};

export default Footer;