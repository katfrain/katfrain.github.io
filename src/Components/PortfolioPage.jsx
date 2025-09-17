import "./PortfolioPage.css"
import GalleryCard from "./GalleryCard.jsx"
import projects from "../Projects.js";

function PortfolioPage({ onSelectProject }) {
    return (
        <div className="PortfolioPage">
            <div className={"Top-Bar"}>
                <div><h2>PORTFOLIO</h2></div>
                <div className={"Info"}>
                    <h3>Hi There!</h3>
                    <p>
                        Welcome to my portfolio, where I share my projects from many different disciplines!</p>
                </div>
                            </div>
            <div className={"Gallery"}>
                <div className="Card-Container">
                    {projects.map((project, index) => (
                        <GalleryCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            onClick={() => onSelectProject(project)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage