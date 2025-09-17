import "./ContactPage.css"
import LinkContainer from "./LinkContainer.jsx";


export default function ContactPage() {
    return (
        <div className="ContactPage">
            <div className={"Contact-Img-Container"}>
                <img className={"Contact-Img"} src={"images/contact.png"} alt="Contact" />
            </div>
            <div className={"Contact-Info"}>
                <h2 className={"Contact-Info-Title"}>
                    CONTACT ME!
                </h2>
                <p className={"Contact-Info-Details"}>
                    For business inquiries, shoot me an email at:
                    <br/><br/>
                    kdiane0941@gmail.com
                    <br/><br/>
                    Or, check me out on the following platforms...
                </p>
                <div className={"Contact-Info-Links"}>
                    <LinkContainer />
                </div>
            </div>
        </div>
    );
}
