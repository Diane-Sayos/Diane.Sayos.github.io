import './Footer.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import resume from '../../images/personal/DianeSayos-Briones.pdf';
import businessCard from '../../images/personal/businesscard.png';


const Footer = () => {
    
    return (
        <section className="footer">
            <div className="container" onClick={() => window.open("https://www.linkedin.com/in/diane-sayos-briones/", "_blank")}>
                <LinkedInIcon />
            </div>
            <div className="container" onClick={() => window.open("https://github.com/Diane-Sayos", "_blank")}>
                <GitHubIcon />
            </div>
            <div className="container" onClick={() => window.open("https://www.facebook.com/dianenazares", "_blank")}>
                <FacebookIcon />
            </div>
            <div className="container" onClick={() => window.open("https://www.instagram.com/_divineheart_/", "_blank")}>
                <InstagramIcon />
            </div>
            <div className="container" onClick={() => window.open("https://calendly.com/dianesayosbriones", "_blank")}>
                <CalendarMonthIcon />
            </div>
            <div className="container">
                <a href="mailto:dianesayosbriones@gmail.com" target="_blank" rel="noreferrer"><MailIcon /></a>
            </div>
            <div className="container">
                <a href={resume} download className="download-button"><StickyNote2Icon /></a>
            </div>
            <div className="container">
                <a href={businessCard} download className="download-button"><CreditCardIcon /></a>
            </div>
            <div className="container">
                <a href="tel:+13473487287" target="_blank" rel="noreferrer"><CallIcon /></a>
            </div>
        </section>
    )
};

export default Footer;