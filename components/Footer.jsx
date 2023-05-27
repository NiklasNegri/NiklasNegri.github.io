import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    © {new Date().getFullYear()} Niklas Negri portfolio
                </p>
                <div className="social_icons">
                    <a
                        href="https://github.com/niklasnegri"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon="fa-brands fa-github" width="35px" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/niklas-negri-7a09a8236/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" width="35px" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;