import './Home.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import avatar from '../../images/personal/avatar.JPG';
import fullstack from '../../images/certifications/FullstackCertificate.png';
import aws from '../../images/certifications/Coursera-AWS.png';

const images = [
    avatar,
    fullstack,
    aws
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
                            My name is Diane Sayos-Briones and I am a Software Engineer based in NYC.<br /><br />
                            I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly.
                            I am a team player and I love dedicating all my skills and talents to develop high-quality and unique applications.<br /><br />
                            I love playing sudoku, dancing with friends, going karaoke, and trying new food spots during my free time. <br /><br />
                            Oh! And did I mention I have two adorable cats? Don't worry, I'll provide pictures of them as well!
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
};

export default Personal;