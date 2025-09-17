import {useEffect, useRef, useState} from "react";
import "./App.css";
import Header from "./Components/Header.jsx";
import HomePage from "./Components/HomePage.jsx";
import PortfolioPage from "./Components/PortfolioPage.jsx";
import ContactPage from "./Components/ContactPage.jsx";
import ProjectPage from "./Components/ProjectPage.jsx";

function App() {
    const containerRef = useRef(null);

    const [page, setPage] = useState("home");
    const [selectedProject, setSelectedProject] = useState(null);

    let content;
    switch (page) {
        case "home": content = <HomePage />; break;
        case "portfolio":
            content = (
                <PortfolioPage
                    onSelectProject={(project) => {
                        setSelectedProject(project);
                        setPage("project");
                    }}
                />
            );
            break;
        case "project":
            content = (
                <ProjectPage
                    project={selectedProject}
                    goBack={() => setPage("portfolio")}
                />
            );
            break;
        case "contact": content = <ContactPage />; break;
        default: content = <HomePage />;
    }


    useEffect(() => {
        const elem = containerRef.current;

        function parallax(e) {
            let mouseX = e.clientX / window.innerWidth - 0.5;
            let mouseY = e.clientY / window.innerHeight - 0.5;

            let _depth1 = `${50 + mouseX * 8}% ${50 + mouseY * 8}%`;
            let _depth2 = `${50 + mouseX * 12}% ${50 + mouseY * 12}%`;
            let _depth3 = `${50 + mouseX * 20}% ${50 + mouseY * 20}%`;
            let _depth4 = `${50 + mouseX * 25}% ${50 + mouseY * 25}%`;

            elem.style.backgroundPosition = `${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}, center`;
        }

        document.addEventListener("mousemove", parallax);

        // cleanup when component unmounts
        return () => document.removeEventListener("mousemove", parallax);
    }, []);

    return (
        <div ref={containerRef} className="Body">
            <div className="MainPageContainer">
                <Header onNavigate={setPage} />
                {content}
                <p className="Copyright">copyright @ katrina frain 2025</p>
            </div>
        </div>
    );
}

export default App;
