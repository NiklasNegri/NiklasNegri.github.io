import Image from "next/image";

const projectData = [
    {
        id: 1,
        title: 'My Portfolio',
        description:
            'A simple one-page Next.js application that uses Static Site Generation without data. Hosted on GitHub pages with worksflows.',
        gitHubLink: 'https://github.com/NiklasNegri/NiklasNegri.github.io',
        skillIcons: ["/images/iconnextjs.svg", "/images/iconjs.svg", "/images/iconcss.svg"]
    },
    /* {
        id: 2,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
        skillIcons: [],
    },
    {
        id: 3,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
        skillIcons: [],
    },
    {
        id: 4,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
        skillIcons: [],
    },
    {
        id: 5,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
        skillIcons: [],
    }, */
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <div className="small-icons">
                                {project.skillIcons.map(icon =>
                                    <Image src={icon} width={35} height={35} />)}
                            </div>
                        </div>
                        <a href={project.gitHubLink}>
                            <h3>{project.title}</h3>
                        </a>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects;