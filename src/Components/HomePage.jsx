import "./HomePage.css"
import LinkContainer from "./LinkContainer.jsx";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="Left-Content">
                <div className="Profile-Picture">
                    <div className="Profile-Picture-Image-Container">
                        <img className="Profile-Picture-Image" src={"images/profile-pic.png"} alt="profile-pic" />
                    </div>
                    <div className="Profile-Picture-Hello-Container">
                        <img className="Profile-Picture-Hello" src={"images/hello.png"} alt="hello!" />
                    </div>
                </div>
                <div className="About-Me">
                    <h3>im kat, a 4th year computation arts student. </h3>
                    <p>I am driven by discovering new ways to integrate art and technology. I am always  working on something new so stay tuned as I fill up my portfolio with  projects from all sorts of different disciplines!</p>
                    <div className="Divider"></div>
                    <LinkContainer />
                </div>
            </div>
            <div className="Right-Content">
                <div className="Right-Text">
                    <h2 className="Right-Title">
                        welcome...
                        <img className={"Star"} src={"images/star.png"} alt={"Star"}/>
                        <img className={"Exclamation"} src={"images/exclamation.png"} alt={"Exclamation"}/>
                    </h2>
                    <p className={"Right-P"}>... to my corner of the internet! Here, you can explore experiments, prototypes, and finished projects that showcase my process, curiosity, and love for creative problem-solving.<br /><br />Each piece reflects a different approach to blending visuals, interaction, and code, and there’s always something new on the way, so keep an eye out as the portfolio grows!</p>
                </div>
                <div className="Skill-Box-Container">
                    <div className="Artistic-Box Skill-Box">
                        <h4 className="Skill-Title">artistic skills</h4>
                        <img className="Skill-Img" src={"images/Figma.png"} alt="Figma" />
                        <img className="Skill-Img" src={"images/Blender.png"} alt="Blender" />
                        <img className="Skill-Img" src={"images/PhotoShop.png"} alt="Adobe Photoshop" />
                        <img className="Skill-Img" src={"images/AdobeIllustrator.png"} alt="Adobe Illustrator" />
                        <p className="Skill-Text">Figma - Blender - Photoshop - Illustrator</p>
                    </div>
                    <div className="Technical-Box Skill-Box">
                        <h4 className="Skill-Title">technical skills</h4>
                        <p className="Skill-Text">HTML - CSS - Java - JavaScript - React - C - C++ - C# - Python - Assembly - GDScript - SFML - SQL</p>
                    </div>
                    <div className="Interest-Box Skill-Box">
                        <h4 className="Skill-Title">interests</h4>
                        <p className="Skill-Text">Video Games - Horror - Fantasy - Reading - Crochet - Pixel Art - Game Dev</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage