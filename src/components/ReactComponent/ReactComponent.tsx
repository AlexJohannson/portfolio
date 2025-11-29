import './ReactComponent.css'


export const ReactComponent = () => {
    return (
        <>
            <div className='react-component'>
                <div className='text-react'>
                    <h2>React + Vite (User & Recipe Dashboard - DummyJSON API)</h2>
                    <p>This is a responsive web application built with React that integrates the DummyJSON API to
                        manage user authentication, user profiles, and recipe data. Authentication system - users must
                        log in with valid credentials to access the app. Incorrect input triggers visual validation
                        feedback. Navigation - after login, users see links to HOME, USERS, RECIPES, and a LOGOUT button.
                        User list - paginated list of users (5 per page) with search functionality by name or ID.
                        Clicking a user opens a detailed profile. User profile - displays full user details and their
                        associated recipe (if available). Recipe list - paginated list of recipes (5 per page) with
                        search by tag or ID. Clicking a recipe or tag filters and opens detailed views.
                    </p>
                    <h4>Tools I used:</h4>
                    <p>React + Vite</p>
                    <p>React Router DOM</p>
                    <p>React Redux & Redux Toolkit</p>
                    <p>React Hook Form</p>
                    <p>Joi</p>
                    <p>Axios</p>
                    <p>DummyJSON API</p>
                    <div className='react-img'>
                        <img
                            src="/img/react/react-1.png"
                            srcSet="/img/react/react-1.png"
                            alt="React"
                            className="React-1"
                        />
                        <img
                            src="/img/react/react-2.png"
                            srcSet="/img/react/react-2.png"
                            alt="React"
                            className="React-2"
                        />
                        <img
                            src="/img/react/react-3.png"
                            srcSet="/img/react/react-3.png"
                            alt="React"
                            className="React-3"
                        />
                        <img
                            src="/img/react/react-4.png"
                            srcSet="/img/react/react-4.png"
                            alt="React"
                            className="React-4"
                        />
                        <img
                            src="/img/react/react-5.png"
                            srcSet="/img/react/react-5.png"
                            alt="React"
                            className="React-5"
                        />
                        <img
                            src="/img/react/react-6.png"
                            srcSet="/img/react/react-6.png"
                            alt="React"
                            className="React-6"
                        />
                        <img
                            src="/img/react/react-7.png"
                            srcSet="/img/react/react-7.png"
                            alt="React"
                            className="React-7"
                        />
                        <img
                            src="/img/react/react-8.png"
                            srcSet="/img/react/react-8.png"
                            alt="React"
                            className="React-8"
                        />
                        <img
                            src="/img/react/react-9.png"
                            srcSet="/img/react/react-9.png"
                            alt="React"
                            className="React-9"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default ReactComponent;