import "./AboutMeComponent.css"

const AboutMeComponent = () => {
    return (
        <div className='about-me-container'>
            <img src="/img/my-photo/oleksandr.png" className='about-me-img' alt="Oleksandr" />
            {/*<div className='about-me-text'>*/}
            {/*    <h1>Hello World! I am Oleksandr Mekhed</h1>*/}
            {/*    <h2>Fullstack Developer</h2>*/}
            {/*    <p>*/}
            {/*        Fullstack developer with a backend-first mindset and strong frontend execution. I build*/}
            {/*        production-grade platforms using Django, Django REST Framework, Python, Celery, Redis, WebSocket,*/}
            {/*        React, Next.js, Redux, and TypeScript. I’ve delivered real-time systems with tests, role-based access,*/}
            {/*        and responsive UIs. Skilled in bridging business logic and user experience through clean architecture*/}
            {/*        and asynchronous workflows. Focused on developing reliable digital solutions and ready*/}
            {/*        to apply skills in professional teams.*/}
            {/*    </p>*/}

            {/*</div>*/}
            <div className='about-me-text'>
                <h1>Hello World! I am Oleksandr Mekhed</h1>
                <h2>Junior Fullstack Developer</h2>
                <p>
                    Fullstack developer with a backend-first mindset and hands-on experience building production-grade
                    platforms. I work confidently with Django, Django REST Framework, FastAPI, Celery, Redis, WebSockets,
                    Docker, React, Next.js, Redux and TypeScript.
                    <br /><br />
                    I’ve delivered systems featuring real-time communication, role-based access, asynchronous workflows,
                    PDF generation and fully containerized environments. My focus is clean architecture, reliable backend
                    logic and seamless integration between business rules and user experience.
                    <br /><br />
                    I’m driven by building practical, maintainable solutions and I’m ready to apply my skills in a
                    professional engineering team.
                </p>
            </div>

        </div>
    );
};
export default AboutMeComponent;