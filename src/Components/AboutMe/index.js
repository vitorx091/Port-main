import "./AboutMe.css"

const AboutMe = (props) =>{
    return(
        <div>
        <div className="box" id="section2">
            <div className="apresentação-sobre-mim">
                <h3 id="sobre-mim">{props.title}</h3>
                <p>{props.discretion}</p>
            </div>
        </div>
    </div>
    )
}

export default AboutMe;