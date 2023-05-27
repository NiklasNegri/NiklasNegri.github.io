import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <span>
                <Link href="#about-section">About Me</Link>
            </span>
            <span>
                <Link href="#experience-section">Experience</Link>
            </span>
            <span>
                <Link href="#skills-section">Skills</Link>
            </span>
            <span>
                <Link href="#projects-section">Projects</Link>
            </span>
            <span>
                <Link href="#contact-section">Contact Me</Link>
            </span>
        </div>
    )
}

export default Navbar;