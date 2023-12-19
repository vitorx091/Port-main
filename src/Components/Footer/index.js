import "./Footer.css"

const Footer = (props) => {
    return (
        <div className="main-footer">
            <div className="main-footer__upper">
                <div className="main-footer__row-1">
                    <span>Social</span>
                    <div className="main-footer__social-cont">
                        <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-fidelis-aa1aa7259/">
                            <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" >
                            </img>
                        </a>
                        <a href="https://github.com/vitorx091">
                            <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" >
                            </img>
                        </a>
                    </div></div>
                <div className="main-footer__row-2">
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>

            </div>
            <div className="main-footer__lower">
                <p>{props.Copyright} <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-fidelis-aa1aa7259/">Vitor</a></p>
            </div>

        </div>
    )
}

export default Footer;