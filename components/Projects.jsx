import Image from "next/image";

const projectData = [
    {
        id: 1,
        title: 'Curriculum Vitae',
        description:
            'A simple one-page Next.js application that uses Static Site Generation without data. Hosted on GitHub pages with worksflows.',
        gitHubLink: 'https://github.com/NiklasNegri/NiklasNegri.github.io',
    },
    {
        id: 2,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
    },
    {
        id: 3,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
    },
    {
        id: 4,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
    },
    {
        id: 5,
        title: 'TBA',
        description:
            '',
        gitHubLink: '',
    },
];

const Projects = () => {
    return (
        <div id="projects-section">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projectData && projectData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-header">
                                <Image src="/images/icongitrepository.svg" width={35} height={35} />
                                <div className="small-icons">
                                    <a href={project.gitHubLink}><Image src="/images/icongithub.svg" width={35} height={35} /></a>
                                </div>
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;