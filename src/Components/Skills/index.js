import "./Skills.css"

const Skills = (props) => {
    return (
        <div>
            <div className="skills-container">
                <div className="skills">
                    <div className="skills-skill">{props.skill}</div>
                </div>
            </div>
        </div>
    )

}

export default Skills;