import {useState} from "react";
import "./ProjectPage.css";
import tagColors from "../Tags.js";


export default function ProjectPage({ project, goBack }) {

    const [currentImage, setCurrentImage] = useState(0);

    if (!project) return <div>No project selected.</div>;

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % project.gallery.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) =>
            prev === 0 ? project.gallery.length - 1 : prev - 1
        );
    };

    return (
        <div className="ProjectPage">
            <div className="Project-Header">
                <button
                    className="BackButton"
                    onClick={goBack}
                >
                    x
                </button>
            </div>

            <div className="Project-Gallery">
                <div className="Project-Gallery-Carousel">
                    <button className="Carousel-Arrow Left" onClick={prevImage}>
                        ◀
                    </button>

                    <img
                        src={project.gallery[currentImage]}
                        alt={`${project.title} screenshot ${currentImage + 1}`}
                        className="Project-Gallery-Img"
                    />

                    <button className="Carousel-Arrow Right" onClick={nextImage}>
                        ▶
                    </button>
                </div>
            </div>

            <div className="Project-Details">
                <div className="Project-Details-Content">
                    <div>
                        <div className="Project-Page-Title">{project.title}</div>
                        <div className="Project-Page-Description">{project.description}</div></div>
                    <div className="Project-Page-Tags-Container">
                        {project.tags.map((tag, index) => (
                            <div
                                key={index}
                                className="Card-Tag"
                                style={{ backgroundColor: tagColors[tag] || "#ccc" }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="Project-Details-Info">
                    {project.info.split("\n").map((line, i) => (
                        <span key={i}>{line}<br/></span>
                    ))}
                </div>
            </div>
        </div>
    );
}
