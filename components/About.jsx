import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <h3>Personal information and soft skills</h3>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        28 years old and have lived in Gothenburg with my fiance for the past 8 years. In my free time
                        I play games on my PC, read fantasy, sci-fi or manga, socialize with friends and go to my boxing gym. As I have gained more
                        experience and knowledge in programming my interest has also increased and I now spend a lot
                        of time learning about new technologies and practicing and improving upon what I already know.
                    </p>
                    <p>
                        Before I started studying to become a .NET developer I worked many years in the automotive
                        industry as an assembler and quality controller where I often undertook new responsibilities
                        willingly and I found myself drawn more towards the areas which required a lot of problem solving
                        and communicating with different teams and departments.
                    </p>
                    <p>
                        My ideal work environment is a team based one where the pace is high and there are plenty of
                        new things to learn and adapt to. I enjoy having discussions and communicating with others in
                        a professional environment where mutual respect is highly regarded.
                    </p>
                </div>
                <div className="about-img">
                    <Image src="/images/profile.jpeg" className="profile-img" width={300} height={500} />
                </div>
            </div>
            <div id="experience-section" />
        </div>
    )
}

export default About;