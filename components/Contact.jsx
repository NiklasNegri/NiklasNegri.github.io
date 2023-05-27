import Image from 'next/image';

const Contact = () => {
    return (
        <div id="contact-section">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>I am available on my mobile during regular work hours every week at 076-792-4586</p>
                <p>or you can send me an email at niklas.negri@gmail.com or by clicking the icon below</p>
                <p>Feel free to add me on LinkedIn or check out my GitHub profile</p>
                <div className="social_icons">
                    <a
                        href="mailto:niklas.negri@gmail.com">
                        <Image src="/images/icongmail.svg" width={55} height={55} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/niklas-negri-7a09a8236/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src="/images/iconlinkedin.svg" width={50} height={50} />
                    </a>
                    <a
                        href="https://github.com/niklasnegri"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src="/images/icongithub.svg" width={50} height={50} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;