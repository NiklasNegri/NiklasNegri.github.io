import Image from "next/image";
import img from "../public/images/profile.jpeg"

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src={img} className="profile-img" width={400} height={400} alt="Niklas profile" />
            <div className="hero-text">
                <h1>Hey, I'm Niklas 👋</h1>
                <p>
                    Lorem Ipsum
                </p>
            </div>
        </div>
    )
}

export default Hero;