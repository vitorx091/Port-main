import "./menu.css"

const Menu = (props)=>{
    return (
        <div className={`menu`}>
            <div className="Container-Menu">
            <section className="MenuHamburger">
            </section>
                <div className="Container-menu">
                    <p>{props.name}</p>
            <nav>
            <ul>
                    <li><a href={props.linkMenu}>{props.contentMenu}</a></li>
                    <li><a href={props.linkSkills}>{props.contentSkills}</a></li>
                    <li><a href={props.linkProjects}>{props.contentProjects}</a></li>
                    <li><a href={props.linkContact}>{props.contentContact}</a></li>
                </ul>
            </nav></div></div>
        </div>
    );
}

export default Menu;