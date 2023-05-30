import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <span>
                <Link href="/">About</Link>
            </span>
            <span>
                <Link href="#experience-section">Experience</Link>
            </span>
            <span>
                <Link href="#education-section">Education</Link>
            </span>
            <span>
                <Link href="#skills-section">Skills</Link>
            </span>
            <span>
                <Link href="#projects-section">Projects</Link>
            </span>
            <span>
                <Link href="#contact-section">Contact</Link>
            </span>
        </div>
    )
}

export default Navbar;