import './QhealtComponent.css';

export const QhealthComponent = () => {
    return (
        <>
            <div className={'qhealt-component'}>
                <div className={'qhealt'}>
                    <h2>QHealth is a customers medical institution management system</h2>
                    <p>QHealth is a fullstack medical institution management system built with Django REST Framework
                        (DRF) on the backend and React on the frontend. It provides secure role-based access and
                        real-time functionality for booking diagnostics, doctor visits, managing patient journals
                        and prescriptions.
                    </p>
                    <h3>Key Features:</h3>
                    <p>Role-based system: Superuser, Admin, Doctor, Operator, Pharmacist, Patient</p>
                    <p>User management: registration, authentication (JWT), profile updates, blocking, role
                        assignment, sick leaves - PDF generation. Created a weather widget that receive data via the WEATHER API.</p>
                    <h4>Medical workflows:</h4>
                    <p>Booking diagnostics and doctor visits</p>
                    <p>Patient journals (medical records)</p>
                    <p>Prescription management</p>
                    <p>Sick Leave - PDF-generation</p>
                    <h4>Data handling:</h4>
                    <p>Pagination and filtering for all lists</p>
                    <p>Real-time updates via WebSockets (diagnostics, bookings, journals, prescriptions)</p>
                    <h4>Security:</h4>
                    <p>JWT authentication</p>
                    <p>Login attempt limitation (5 failed → API blocked for 10 minutes)</p>
                    <h4>Tech stack:</h4>
                    <p>Backend: Django REST Framework + MySQL</p>
                    <p>Frontend: React</p>
                    <p>Infrastructure: Docker, Docker Compose, Poetry, Nginx</p>
                    <p>API Documentation: Swagger + Postman collection</p>
                    <p>Test backend coverage: views - api`s, filters, managers, models, permissions, serializers</p>
                    <h3>Technologies I Used:</h3>
                    <h4>Frontend:</h4>
                    <p>React</p>
                    <p>React DOM</p>
                    <p>Axios</p>
                    <p>Web Socket</p>
                    <p>React Hook Form</p>
                    <p>React Router Dom</p>
                    <p>Watch</p>
                    <h4>Backend:</h4>
                    <p>Python;</p>
                    <p>Django;</p>
                    <p>Django REST Framework;</p>
                    <p>JWT Authentication (Simple JWT);</p>
                    <p>Celery + Redis;</p>
                    <p>Cloudinary;</p>
                    <p>MySQL;</p>
                    <p>Channels + Daphne + WebSocket;</p>
                    <p>DRF-YASG (Swagger);</p>
                    <h4>DevOps:</h4>
                    <p>Docker / Docker Compose;</p>
                    <p>Poetry;</p>
                    <p>Nginx;</p>
                    <p>MySQL database - deployment and storage on Aiven</p>
                    <p>PDF files storage on Cloudinary</p>
                    <h4>Docker services:</h4>
                    <p>web: Django + Daphne (ASGI) server;</p>
                    <p>db: MySQL;</p>
                    <p>redis: Message broker for Celery;</p>
                    <p>nginx: Reverse proxy server;</p>
                    <p>celery: Background task processor;</p>
                    <p>celery-beat: Scheduled task processor;</p>
                    <h3>Project demo video:</h3>
                    <a  className={'demo-video-link'}
                        href={'https://youtu.be/MaXYAf2G_QY'}
                        target={'_blank'}
                        rel="noopener noreferrer"
                    >Project structure</a>
                    <a  className={'demo-video-link'}
                        href={'https://youtu.be/BZZdlaAprrg'}
                        target={'_blank'}
                        rel="noopener noreferrer"
                    >Web Project</a>
                </div>
            </div>
        </>
    );
};
export default QhealthComponent;