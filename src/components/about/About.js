import './About.css';


const About = () => {
    return (
        <section className="about">
            <h2>About</h2>
            <article className="personal-info">
                <h3>Personal Information</h3>
                <strong>Email:</strong>
                <p>dianesayosbriones@gmail.com</p>
                <strong>Phone Number:</strong>
                <p>1 (347) 348 - 7287</p>
                <strong>LinkedIn:</strong>
                <p>https://www.linkedin.com/in/diane-sayos-briones/</p>
                <strong>Github:</strong>
                <p>https://github.com/Diane-Sayos</p>
            </article>
            <article className="education">
                <h3>Education</h3>
                <div className="card">
                    <strong>Hunter College - CUNY</strong>
                    <p>Bachelor of Arts in Dance, Minor in Psychology</p>
                    <p>Dean's List'</p>
                </div>
                <div className="card">
                    <strong>Fullstack Academy</strong>
                    <p>Web Development - PERN Stack</p>
                </div>
            </article>
            <article className="tech-stack">
                <h3>Tech Stack</h3>
                <strong>Language:</strong>
                <p>Javascript</p>
                <strong>Frontend:</strong>
                <p>React, Redux, HTML5, CSS3, MAterial UI</p>
                <strong>Backend:</strong>
                <p>Node.js, Express.js</p>
                <strong>Database:</strong>
                <p>PostgreSQL</p>
                <strong>Version Control:</strong>
                <p>Git, Github</p>
                <strong>Tools:</strong>
                <p>VS Code, npm ,yarn</p>
                <strong>Other:</strong>
                <p>RESTful APIs, Responsive Design</p>
            </article>
        </section>
    )
};

export default About;