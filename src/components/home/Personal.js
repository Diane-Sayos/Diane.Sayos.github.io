import './Home.css';

import avatar from '../../images/personal/avatar.JPG';


//edit to an about page--make sure to add images,and a short paragraph descibing me!
const Personal = () => {
    return (
        <section>
            <article className="about">
                <h2>ABOUT ME</h2>
                <div className="about-card">
                    <div className="about-card-image-container">
                        <img alt="#" src={avatar} className="about-card-image"/>
                    </div>
                    <div className="about-card-description">
                        <p>
                            My name is Diane Sayos-Briones and I am a Software Engineer based in NYC.
                            I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly.
                            I am a team player and I love dedicating all my skills and talents to develop high-quality and unique applications.
                            I love playing sudoku, dancing with friends, going karaoke, and trying new food spots during my free time.
                            Oh! And did I mention I have two adorable cats? Don't worry, I'll provide pictures of them as well!
                        </p>
                    </div>
                </div>
            </article>
        </section>
    )
};

export default Personal;