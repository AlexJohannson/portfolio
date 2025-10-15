import './NextComponent.css'


export const NextComponent = () => {
    return (
        <>
            <div className='next-component'>
                <div className='text-next'>
                    <h2>Next.js (User & Recipe Dashboard - DummyJSON API)</h2>
                    <p>This is a full-featured web application built with Next.js that integrates the DummyJSON API to
                        manage user authentication, user profiles, and recipe data. The app provides a seamless
                        experience for browsing users and recipes with search, pagination, and dynamic routing.
                        Authentication Flow - On launch, users are prompted to log in. Login form validates credentials
                        in real time. Successful login redirects to the home page with user photo and confirmation message.
                        Users can log out at any time via the LOGOUT button. Users Page - Displays a paginated list of
                        30 users per page. Includes search input by name or ID. Clicking a user’s name opens a detailed
                        profile page. Profile includes personal data and linked recipe (if available). Recipes Page -
                        Shows a paginated list of 30 recipes per page. Includes search by tag or ID. Clicking a recipe
                        name opens a detailed recipe page. Clicking a tag filters recipes by that tag.
                    </p>
                    <h4>Tools I used:</h4>
                    <p>Next.js</p>
                    <p>React 19</p>
                    <p>React Router DOM</p>
                    <p>React Hook Form</p>
                    <p>Joi</p>
                    <p>Axios</p>
                    <p>cookies-next</p>
                    <p>DummyJSON API</p>
                    <div className='next-img'>
                        <img
                            src="/img/next/next-1.png"
                            srcSet="/img/next/next-1.png 1x, /img/next/next-1@2x.png 2x"
                            alt="Next"
                            className="Next-1"
                        />
                        <img
                            src="/img/next/next-2.png"
                            srcSet="/img/next/next-2.png 1x, /img/next/next-2@2x.png 2x"
                            alt="Next"
                            className="Next-2"
                        />
                        <img
                            src="/img/next/next-3.png"
                            srcSet="/img/next/next-3.png 1x, /img/next/next-3@2x.png 2x"
                            alt="Next"
                            className="Next-3"
                        />
                        <img
                            src="/img/next/next-4.png"
                            srcSet="/img/next/next-4.png 1x, /img/next/next-4@2x.png 2x"
                            alt="Next"
                            className="Next-4"
                        />
                        <img
                            src="/img/next/next-5.png"
                            srcSet="/img/next/next-5.png 1x, /img/next/next-5@2x.png 2x"
                            alt="Next"
                            className="Next-5"
                        />
                        <img
                            src="/img/next/next-6.png"
                            srcSet="/img/next/next-6.png 1x, /img/next/next-6@2x.png 2x"
                            alt="Next"
                            className="Next-6"
                        />
                        <img
                            src="/img/next/next-7.png"
                            srcSet="/img/next/next-7.png 1x, /img/next/next-7@2x.png 2x"
                            alt="Next"
                            className="Next-7"
                        />
                        <img
                            src="/img/next/next-8.png"
                            srcSet="/img/next/next-8.png 1x, /img/next/next-8@2x.png 2x"
                            alt="Next"
                            className="Next-8"
                        />
                        <img
                            src="/img/next/next-9.png"
                            srcSet="/img/next/next-9.png 1x, /img/next/next-9@2x.png 2x"
                            alt="Next"
                            className="Next-9"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default NextComponent;