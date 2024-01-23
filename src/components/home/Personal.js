import './Home.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import avatar from '../../images/personal/avatar.JPG';
import milo from '../../images/personal/milo.jpeg';
import boba from '../../images/personal/boba.jpeg';
import pets from '../../images/personal/pets.jpeg';
import group1 from '../../images/personal/group-WIC.jpeg';
import group2 from '../../images/personal/group2WIC.jpeg';


const images = [
    avatar,
    group1,
    group2,
    boba,
    milo,
    pets
]

//edit to an about page--make sure to add images,and a short paragraph descibing me!
const Personal = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };

    return (
        <section>
            <article className="about">
                <div className="about-card">
                    <div className="introduction">
                    <h1>Hi, my name is <span>Diane Sayos-Briones</span></h1>
                    <h1>I'm a Software Engineer.</h1>
                    </div>
                </div>
                <div className='description-wrapper'>
                <div className="about-card">
                    <div className="slider-container">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="about-card-image-container">
                                <img src={image} alt={`slide-${index}`} className="about-image"/>
                            </div>
                        ))}
                    </Slider>
                    </div>
                    <div className="about-card-description">
                        <h2>ABOUT ME</h2>
                        <p>
                            My name is Diane Sayos-Briones and I am a Software Engineer based in NYC.
                            <br /><br />
                            I'm always open to challenges and constructive feedback. I am open-minded and learn new things quickly.
                            I am a team player and I love dedicating all my skills and talents to develop high-quality and unique applications.
                            <br /><br />
                            I love playing sudoku, dancing with friends, going karaoke, and trying new food spots during my free time.
                            <br /><br />
                            Oh! And did I mention I have two adorable cats? Take a look at the slides to see them!
                        </p>
                    </div>
                </div>
                </div>
            </article>
        </section>
    )
};

export default Personal;