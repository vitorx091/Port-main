import "./Projects.css"


const Projects = (props) => {
    return (
        <div>
            <div className="projects-container" id="section3">
                <div className="box-projects">
                    <h2 className="title">{props.title}</h2>
                    <div className="projects-row">
                        <div className="project">
                            <h1>{props.titleProject}</h1>
                            <p className="discritionproject">{props.discretionproject}</p>
                        </div>
                        <div className="comment-project">
                            <div className="titles">{props.discretion}</div>
                            <div className="button-projects">
                                <a href={props.linkProject}><button className="button-project" type="button">Clique</button></a>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default Projects;