import "./AboutMeComponent.css"

const AboutMeComponent = () => {
    return (
        <div className='about-me-container'>
            <img src="/img/my-photo/oleksandr.png" className='about-me-img' alt="Oleksandr" />
            <div className='about-me-text'>
                <h1>Hello World! I am Oleksandr</h1>
                <h2>Fullstack Developer</h2>
                <p>
                    I am backend‑oriented Fullstack Developer with hands‑on experience building production‑grade
                    systems using Django, Django REST Framework, FastAPI, Celery, Redis, WebSockets, Docker, React,
                    Next.js, Redux and TypeScript.
                    <br /><br />
                    I focus on designing clean backend architecture, implementing reliable business logic and ensuring
                    seamless integration between API layers and modern frontend frameworks. My project experience
                    includes real‑time communication features, role‑based access control, asynchronous task pipelines,
                    PDF generation and fully containerized deployments.
                    <br /><br />
                    I build practical, maintainable solutions and enjoy working on systems where correctness,
                    performance and clarity of implementation matter. I’m ready to contribute to real products,
                    collaborate with experienced engineers and continue growing as a backend‑driven fullstack developer.
                </p>
            </div>

        </div>
    );
};
export default AboutMeComponent;