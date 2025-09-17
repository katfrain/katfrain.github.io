import "./Header.css"

export default function Header({ onNavigate }) {
    return (
        <div className="Header">
            <h1 className={"Title"}>katrina frain</h1>
            <div className="NavContainer">
                <button className={"Navigation-Button"} onClick={() => onNavigate("home")}>
                    <img className={"Nav-Img"} src={"images/home.png"} alt={"Home"} />
                    <p className={"Nav-Title"}>Home</p>
                </button>
                <button className={"Navigation-Button"} onClick={() => onNavigate("portfolio")}>
                    <img className={"Nav-Img"} src={"images/portfolio.png"} alt={"Portfolio"} />
                    <p className={"Nav-Title"}>Portfolio</p>
                </button>
                <button className={"Navigation-Button"} onClick={() => onNavigate("contact")}>
                    <img className={"Nav-Img"} src={"images/contact.png"} alt={"Contact"} />
                    <p className={"Nav-Title"}>Contact</p>
                </button>
            </div>
        </div>
    );
}

