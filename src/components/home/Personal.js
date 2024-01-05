import './Home.css';



const Personal = () => {
    return (
        <section>
            <article className="personal-info">
                <h3>PERSONAL INFORMATION</h3>
                <h4>Email:</h4>
                <p>dianesayosbriones@gmail.com</p>
                <h4>Phone Number:</h4>
                <p>1 (347) 348 - 7287</p>
                <h4>Website:</h4>
                <p>dianesayosbriones.netlify.app</p>
                <h4>LinkedIn:</h4>
                <p>https://www.linkedin.com/in/diane-sayos-briones/</p>
                <h4>Github:</h4>
                <p>https://github.com/Diane-Sayos</p>
            </article>
            <article className="education">
                <h3>EDUCATION</h3>
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