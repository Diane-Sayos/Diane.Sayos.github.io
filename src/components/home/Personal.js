import './Home.css';


//edit to an about page--make sure to add images,and a short paragraph descibing me!
const Personal = () => {
    return (
        <section>
            <article className="education">
                <h2>EDUCATION</h2>
                <div className="card">
                    <h4>Hunter College - CUNY</h4>
                    <p>Bachelor of Arts in Dance</p>
                    <p>Minor in Psychology</p>
                    <p>Dean's List</p>
                </div>
                <div className="card">
                    <h4>Fullstack Academy</h4>
                    <p>Web Development - PERN Stack</p>
                </div>
            </article>
        </section>
    )
};

export default Personal;