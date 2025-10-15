import './FooterComponent.css';

export const FooterComponent = () => {
    return (
        <div className="footer-component">
            <h3>SOCIAL</h3>
            <div className="footer-icons-row">
                <a href="https://github.com/AlexJohannson" target="_blank" rel="noopener noreferrer">
                    <img src="/img/icons/github.png" className="footer-icon" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/oleksandr-mekhed-07a1b1347" target="_blank" rel="noopener noreferrer">
                    <img src="/img/icons/linkedin.png" className="footer-icon" alt="LinkedIn" />
                </a>
                <a href="mailto:mehedsanya@gmail.com">
                    <img src="/img/icons/email.png" className="footer-icon" alt="Email" />
                </a>
            </div>
            <p>Developed by Oleksandr Mekhed</p>
            <p>© Copyright 2025</p>
        </div>
    );
};

export default FooterComponent;