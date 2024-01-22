import './Projects.css';

import ImageCarousel from './ImageCarousel';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';


const SpecificProject = ({ project }) => {
    return (
        <Card raised sx={{width:300, height:370, p:"0.5rem", m:"1rem auto", borderRadius:"1em"}} >
            <ImageCarousel images={project.images}/>
            <br />
            <CardActionArea onClick={() => window.open(`${project.link}`, "_blank")}>
                <CardContent sx={{margin:"10px", p:"10px"}}>
                    <Typography variant="h6" component="div" textAlign="center" color="#7f5539">
                        {project.name}
                        <OpenInNewOutlinedIcon fontSize='small'/>
                    </Typography>
                    <Typography variant="body2" color="#7f5539">
                        {project.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default SpecificProject;