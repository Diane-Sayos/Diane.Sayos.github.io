import './Home.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';


const Education = () => {
    return (
        <section className="education">
        <h3>EDUCATION</h3>
        <div className="card">
            <strong>Hunter College - CUNY</strong>
            <p>Bachelor of Arts in Dance, Minor in Psychology</p>
            <p>Dean's List'</p>
        </div>
        <div className="card">
            <strong>Fullstack Academy</strong>
            <p>Web Development - PERN Stack</p>
        </div>
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DownloadIcon />}>Download Resume</Button>
            <Button variant="outlined" startIcon={<DownloadIcon />}>Download Business Card</Button>
        </Stack>
    </section>
    )
};

export default Education;