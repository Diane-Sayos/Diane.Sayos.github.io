import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Paper from '@mui/material/Paper';

import resume from '../../images/personal/DianeSayos-Briones.pdf';
import businessCard from '../../images/personal/businesscard.png';

import './Footer.css';

const Footer = () => {
    
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, p:0, display:"flex", justifyContent:"center" }} elevation={4}>
            <LinkedInIcon sx={{m:"0.25rem"}} onClick={() => window.open("https://www.linkedin.com/in/diane-sayos-briones/", "_blank")}/>
            <GitHubIcon sx={{m:"0.25rem"}} onClick={() => window.open("https://github.com/Diane-Sayos", "_blank")}/>
            <FacebookIcon sx={{m:"0.25rem"}} onClick={() => window.open("https://www.facebook.com/dianenazares", "_blank")}/>
            <InstagramIcon sx={{m:"0.25rem"}} onClick={() => window.open("https://www.instagram.com/_divineheart_/", "_blank")}/>
            <CalendarMonthIcon sx={{m:"0.25rem"}} onClick={() => window.open("https://calendly.com/dianesayosbriones", "_blank")}/>
            <a href="mailto:dianesayosbriones@gmail.com" target="_blank" rel="noreferrer" className="footer-button"><MailIcon sx={{m:"0.25rem"}}/></a>
            <a href={resume} download className="footer-button"><StickyNote2Icon sx={{m:"0.25rem"}}/></a>
            <a href={businessCard} download className="footer-button"><CreditCardIcon sx={{m:"0.25rem"}}/></a>
            <a href="tel:+13473487287" target="_blank" rel="noreferrer" className="footer-button"><CallIcon sx={{m:"0.25rem"}}/></a>
        </Paper>
    )
};

export default Footer;