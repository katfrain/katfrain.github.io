import "./GalleryCard.css";
import tagColors from "../Tags.js";

function GalleryCard({ image, title, description, tags, onClick }) {
    return (
        <button className="GalleryCard" onClick={onClick}>
            <img className="Card-Img" src={image} alt={title} />
            <div className="Card-Info">
                <div>
                    <div className="Card-Title">{title}</div>
                    <div className="Card-Description">{description}</div>
                </div>
                <div className="Card-Tag-Container">
                    {tags.map((tag, index) => (
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
        </button>
    );
}

export default GalleryCard;
