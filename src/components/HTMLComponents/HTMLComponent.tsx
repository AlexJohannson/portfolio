import './HTMLComponent.css'

const HtmlComponent = () => {
    return (
        <>
            <div className='html-css'>
                <h2 className={'title'}>My Projects</h2>
                <div className='text-html-css'>
                    <h2>Frontend Developer</h2>
                    <p>HTML and CSS full-fledged project built from scratch using HTML and CSS. I designed a
                        multi-section landing page for a Frontend Developer profile.
                    </p>
                    <h4>Tools I used:</h4>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>Figma</p>
                    <p>Favicon</p>
                    <p>Flexbox</p>
                    <p>Custom class naming</p>
                    <div className='html-css-img'>
                        <img
                            src="/img/html-css/html-1.png"
                            srcSet="/img/html-css/html-1.png 1x, /img/html-css/html-1@2x.png 2x"
                            alt="HTML5"
                            className="html-1"
                        />
                        <img
                            src="/img/html-css/html-2.png"
                            srcSet="/img/html-css/html-2.png 1x, /img/html-css/html-2@2x.png 2x"
                            alt="HTML5"
                            className="html-2"
                        />
                        <img
                            src="/img/html-css/html-3.png"
                            srcSet="/img/html-css/html-3.png 1x, /img/html-css/html-3@2x.png 2x"
                            alt="HTML5"
                            className="html-3"
                        />
                        <img
                            src="/img/html-css/html-4.png"
                            srcSet="/img/html-css/html-4.png 1x, /img/html-css/html-4@2x.png 2x"
                            alt="HTML5"
                            className="html-4"
                        />
                        <img
                            src="/img/html-css/html-5.png"
                            srcSet="/img/html-css/html-5.png 1x, /img/html-css/html-5@2x.png 2x"
                            alt="HTML5"
                            className="html-6"
                        />
                        <img
                            src="/img/html-css/html-7.png"
                            srcSet="/img/html-css/html-7.png 1x, /img/html-css/html-7@2x.png 2x"
                            alt="HTML5"
                            className="html-7"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HtmlComponent;