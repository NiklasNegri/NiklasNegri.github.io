import Image from "next/image";

const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card csharp">
                    <Image src="/images/iconcsharp.svg" width={35} height={35} />
                    <p>C#</p>
                </div>
                <div className="skill-card dotnet6">
                    <Image src="/images/icondotnet6.png" width={35} height={35} />
                    <p>.NET 6</p>
                </div>
                <div className="skill-card efcore">
                    <Image src="/images/iconefcore.png" width={35} height={35} />
                    <p>EF Core</p>
                </div>
                <div className="skill-card css">
                    <Image src="/images/iconcss.svg" width={35} height={35} />
                    <p>CSS</p>
                </div>
                <div className="skill-card html">
                    <Image src="/images/iconhtml5.svg" width={35} height={35} />
                    <p>HTML5</p>
                </div>
                <div className="skill-card js">
                    <Image src="/images/iconjs.svg" width={35} height={35} />
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <Image src="/images/iconreact.svg" width={35} height={35} />
                    <p>React</p>
                </div>
                <div className="skill-card nextjs">
                    <Image src="/images/iconnextjs.svg" width={35} height={35} />
                    <p>Next.js</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;