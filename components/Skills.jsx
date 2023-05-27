import Image from "next/image";

const Skills = () => {
    return (
        <div id="skills-section">
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
                    <div className="skill-card visualstudio">
                        <Image src="/images/iconvisualstudios.png" width={35} height={35} />
                        <p>Visual Studios</p>
                    </div>
                    <div className="skill-card sql">
                        <Image src="/images/iconsql.png" width={35} height={35} />
                        <p>SQL / T-SQL</p>
                    </div>
                    <div className="skill-card atlassian">
                        <Image src="/images/iconatlassian.png" width={35} height={35} />
                        <p>Atlassian Jira/Confluence</p>
                    </div>
                    <div className="skill-card css">
                        <Image src="/images/iconcss.svg" width={35} height={35} />
                        <p>CSS</p>
                    </div>
                    <div className="skill-card azure">
                        <Image src="/images/iconazure.svg" width={35} height={35} />
                        <p>Azure</p>
                    </div>
                    <div className="skill-card ssms">
                        <Image src="/images/iconssms.png" width={35} height={35} />
                        <p>SSMS</p>
                    </div>
                    <div className="skill-card js">
                        <Image src="/images/iconjs.svg" width={35} height={35} />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-card nextjs">
                        <Image src="/images/iconnextjs.svg" width={35} height={35} />
                        <p>Next.js</p>
                    </div>
                    <div className="skill-card html">
                        <Image src="/images/iconhtml5.svg" width={35} height={35} />
                        <p>HTML5</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;