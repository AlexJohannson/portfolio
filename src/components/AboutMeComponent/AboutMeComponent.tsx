import "./AboutMeComponent.css"

const AboutMeComponent = () => {
    return (
        <div className='about-me-container'>
            <img src="/img/my-photo/oleksandr.png" className='about-me-img' alt="Oleksandr" />
            <div className='about-me-text'>
                <h1>Hello World! I am Oleksandr Mekhed</h1>
                <h2>Fullstack Developer</h2>
                <p>
                    Fullstack developer with a backend-first mindset and strong frontend execution. I build
                    production-grade platforms using Django, Django REST Framework, Python, Celery, Redis, WebSocket,
                    React, Next.js, Redux, and TypeScript. I’ve delivered real-time systems with tests, role-based access,
                    and responsive UIs. Skilled in bridging business logic and user experience through clean architecture
                    and asynchronous workflows. Transitioned from logistics to fullstack development through rigorous
                    self-education, IT courses, and hands-on architecture practice.
                </p>

            </div>
        </div>
    );
};
export default AboutMeComponent;