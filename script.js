document.addEventListener("DOMContentLoaded", function () {

// declaring constants
    const overlay = document.getElementById("overlay");
    const projectImg = document.getElementById("projectImg");
    const caption = document.getElementById("caption");
    const title = document.getElementById("overlay-title");
    const info = document.getElementById("overlay-info");
    const olink = document.getElementById("optional-link");

// declaring variables
    let dot = [];
    let currentProject = null;
    let currentSlide = 0;
    let previousDot = null;

// each project is stored in projects array
    const projects = {
        project1: {
            images: ["images/project1-cover.png", "images/project1-progress.png"],
            captions: ["Home page design done in Figma", "Different iterations of the wesbite design - also done in Figma"],
            dots: ["dot1", "dot2"],
            projectTitle: ["Personal Website, 2024"],
            projectInfo: ["I had a lot of fun designing and implementing my personal website. I went through multiple design iterations before I created something that I was satisfied with and felt like it represented my personality. I am very happy with the final design, but I will keep this website as a constant work in progress so that I can continue adding new things and polishing the old designs. <br><br> The most challenging part of this project was implementing the JavaScript, which I used to make these pop-up overlays that showcase my work.It had been a while since I had used JavaScript and this project was a nice refresher. <br><br> Skills used: HTML, CSS, JavaScript, Figma"],
            optionalLink: [""]
        },
        project2: {
            images: ["images/project2-1.png", "images/project2-2.png", "images/project2-3.png", "images/project2-4.png"],
            captions: ["The three posters", "Orthongonal", "Diagonal", "Freeform"],
            dots: ["dot1", "dot2", "dot3", "dot4"],
            projectTitle: ["Mock Poster Design, 2023"],
            projectInfo: ["Three posters I designed for an assignment at Concordia University. The first one had to be designed based on an orthogonal grid, the second one based on a diagonal grid, and the third one free from. We had a lot of freedom surrounding the subject of our posters, so I created a fake music festival featuring some of my favorite riot grrrl bands.<br><br>Skills used: Figma, Illustrator"],
            optionalLink: [""]
        },
        project3: {
            images: ["images/project3-3.png", "images/project3-2.png", "images/project3-1.png"],
            captions: ["Final album design", "Moodboard", "Different ideas I had for the cover"],
            dots: ["dot1", "dot2", "dot3"],
            projectTitle: ["Mock Album Design, 2023"],
            projectInfo: ["A mock album cover designed for an assignment at Concordia University. I really wanted to go a very illustrative route with a painting as the main focus of the cover. You can see the different iterations I went through on slide 3, as well as a mood board I put together to guide my work on slide 2. I created the painting in procreate and put the final design together in Figma.<br><br>Skills used: Procreate, Figma"],
            optionalLink: [""]
        },
        project4: {
            images: ["images/project4-1.png", "images/project4-2.png", "images/project4-4.png"],
            captions: ["Final version of the ticket", "First version of the ticket", "The banner"],
            dots: ["dot1", "dot2", "dot3"],
            projectTitle: ["Design work for school event, 2022"],
            projectInfo: ["I was asked to design a ticket and a banner for my High School’s reunion/grad do-over, as our grad was canceled by the Pandemic. I had a lot of fun transforming our school’s logo and colors in my design.<br><br>This was my first real graphic design project and it taught me a lot about vector editing, color choice, and making sure my design is practical for real life use.<br><br>Skills used: Illustrator"],
            optionalLink: [""]
        },
        project5: {
            images: ["images/project5-2.gif", "images/project5-3.png"],
            captions: ["Our little study knight in action!", "The chrome extension"],
            dots: ["dot1", "dot2"],
            projectTitle: ["StudyKnight, 2024"],
            projectInfo: ["StudyKnight is a Hackathon project I collaborated on with 2 other students. We created a chrome extension that acts as a game, a time tracker, and a personal checklist, as well as taking advantage of your own personal reward systems to keep you doing what's best for you. Using our own xp and level up system, completing tasks, staying on productive websites, and doing long sessions of work, gives you and your knight xp, eventually leveling up to grant you bigger and better weapons. You also add to your own list of distracting websites, which will decrease your xp, to encourage you to stay on track<br><br>I was in charge of the pixel art assets, UI design, and implementing this using html and css. This project pushed me out of my comfort zone creatively and I am really proud of what I have accomplished with Study Knight!<br><br>Skills used: HTML, CSS, Aseprite, Figma<br><br>"],
            optionalLink: ["https://devpost.com/software/study-knight"]
        },
        project6: {
            images: ["images/project6-1.png", "images/project6-2.gif"],
            captions: ["The kitchen model", "Turntable view"],
            dots: ["dot1", "dot2"],
            projectTitle: ["Isometric Kitchen Scene, 2022"],
            projectInfo: ["This was one of my first big projects done in Blender. With my previous projects, I followed detailed tutorials step by step, and while it introduced me to the fundamentals of the software, I realized I was not learning a lot. With this project, I challenged myself to try everything by myself first, before consulting other help. This pushed me to experiment with the tools of the program and cemented important information in my mind. I started with the big shapes, got creative with the smaller details, and looked into tutorials when I got stuck. I enjoyed filling the room with clutter, such as plants, plates, and strawberries I made in a previous exercise. This project pushed me out of my comfort zone and taught me so many valuable lessons about 3D modeling.<br><br>Skills used: Blender<br><br>"],
            optionalLink: [""]
        },
        project7: {
            images: ["images/project7-1.png", "images/project7-2.gif"],
            captions: ["A spooky little witches hut set in a swamp", "Turntable view"],
            dots: ["dot1", "dot2"],
            projectTitle: ["Witches Hut, 2022"],
            projectInfo: ["When I started this scene, I understood most of the basics of Blender and felt comfortable creating simple objects. I set a few goals with this piece to further challenge myself. My biggest goals were: Add basic animations and learn how to create more organic shapes, such as the tree, the reeds, and the water. I was proud to accomplish both of these. Through this project I learned how to use keyframes and displacement maps to create waves in the water; I learned how to create a tree from a single vertice, and it taught me to think creatively to create different animations.<br><br>Skills used: Blender<br><br>"],
            optionalLink: [""]
        },
        project8: {
            images: ["images/project8-2.png", "images/project8-1.png"],
            captions: ["The fishTank website", "The goldfish you start with"],
            dots: ["dot1", "dot2"],
            projectTitle: ["fishTank, 2022"],
            projectInfo: ["fishTank is an interactive website/mini-game designed around caring for fish. While the objective is quite simple, the creation of this website taught me so much about JavaScript, which I was still unfamiliar with at the time of beginning this project. <br><br>This was also my first big pixel art project and it's where I really found my footing in the medium. Working on this project taught me so much about drawing in pixel art, from laying out the shapes to shading, which was all very different from the traditional art that I was used to.  <br><br>Skills used: HTML, CSS, JS, Aseprite<br><br>"],
            optionalLink: ["https://hybrid.concordia.ca/k_frain/fishtank.html"]
        },
        project9: {
            images: ["images/project9-1.png", "images/project9-2.png", "images/project9-3.png"],
            captions: ["A fire demon demands flesh", "Harvest flesh from the flesh garden", "Keep yourself alive by consuming soup and feeding the fire"],
            dots: ["dot1", "dot2", "dot3"],
            projectTitle: ["Flesh Garden, 2024"],
            projectInfo: ["Flesh Garden is a first-person point-and-click survival horror game created for Gamerella 2024, a 2-day game jam. The game's objective is to survive. As your hunger wanes, so does the hunger of the fire that keeps the darkness at bay. Sustain the both of you using resources from your flesh garden, But beware—neglect either, and you risk starvation or becoming fuel for the fire yourself.<br><br>My role in the team was focused on programming, marking my first experience in a game jam as a programmer. To ensure manageability, we started with a small scope and gradually expanded as the project progressed. I developed key systems, including the inventory, the garden's growth mechanics, and the soup-cooking system. We utilized Godot as our game engine and GitHub for seamless collaboration. This project significantly boosted my confidence in game design, programming, and using both Godot and GitHub effectively.  <br><br>Skills used: Godot, GDScript, Github<br><br>"],
            optionalLink: ["https://wevwyrm.itch.io/fleshgarden"]
        },
        project10: {
            images: ["images/project10-1.png", "images/project10-2.png"],
            captions: ["Poster", "Instagram Post"],
            dots: ["dot1", "dot2"],
            projectTitle: ["Graphics for Global Game Jam 2025"],
            projectInfo: ["Illustration by Rev Nahabedian<br><br>I designed this poster for the Global Game Jam 2025 hosted by the Concordia Game Development Club during my time on the club’s art team.<br><br>Skills used: Figma<br><br>"],
            optionalLink: [""]
        },
        project11: {
            images: ["images/project11-1.png", "images/project11-2.png", "images/project11-3.png", "images/project11-4.png", "images/project11-5.png"],
            captions: ["UniTrade Banner", "Log-in Screen", "Shop Screen", "User Screen", "Design Process"],
            dots: ["dot1", "dot2", "dot3", "dot4", "dot5"],
            projectTitle: ["UniTrade, 2025"],
            projectInfo: ["<b>UniTrade</b> is a mobile app designed to help students trade and barter items with others on campus. It was developed over 48 hours during <b>ConUHacks IX</b> by a team of four. I contributed to the project by designing the UI/UX in Figma and building responsive UI components using React Native.<br><br> project was especially challenging due to the tight timeline and the fact that it was our team’s first time using React Native. While I was able to draw on my web development experience, adapting to mobile development required a quick learning curve and collaboration under pressure.\n <br><br>Skills used: React Native, Figma, Github<br><br>"],
            optionalLink: ["https://devpost.com/software/unitrade-oexp03"]
        },
        project12: {
            images: ["images/project12-1.png", "images/project12-2.png", "images/project12-3.png", "images/project12-4.png", "images/project12-5.jpg"],
            captions: ["Main Menu Screen", "In-Game Puzzle", "Characters", "Many of the modular 3D models", "Game being demoed at Ubisoft"],
            dots: ["dot1", "dot2", "dot3", "dot4", "dot5"],
            projectTitle: ["Band Together, 2025"],
            projectInfo: ["<b>Band Together</b> is a 3D co-op puzzle game created for <b>Ubisoft’s 2025 GameLab Competition</b>, where players must work together to solve challenges. Our team worked on the game over the course of a semester.<br><br>I was in charge of creating almost all of the 3D assets for the game, which was both exciting and terrifying since it was my first time making game-ready models. I learned all about asset creation on the go, including balancing visual style, performance, and Unity integration.<br><br>Skills used: Blender, Unity, Figma, Github <br><br>"],
            optionalLink: [""]
        },
        project13: {
            images: ["images/project13-1.png", "images/project13-2.png", "images/project13-3.png", "images/project13-4.gif"],
            captions: ["Main Menu Screen", "Sample Level", "Sample Tileset", "Barking Kitten!"],
            dots: ["dot1", "dot2", "dot3", "dot4"],
            projectTitle: ["Barking Kitten, 2024"],
            projectInfo: ["<b>Barking Kitten</b> is a 2D platformer created in one week for the OPERATION: PHANTOM GAME game jam.<br><br>I worked on the pixel art for the game, designing the main character, enemies, and environmental tiles. It was a great chance to deepen my understanding of pixel art and dip my toes into 2D animation.<br><br>Skills used: Aseprite, Unity <br><br>"],
            optionalLink: [""]
        },
        // Empty project, use this one next
        project14: {
            images: [],
            captions: [],
            dots: [],
            projectTitle: [],
            projectInfo: [],
            optionalLink: [""]
        },
        project15: {
            images: ["images/project15-1.png", "images/project16-2.png"],
            captions: ["Tower Defense UI built with SFML", "Tower Menu"],
            dots: ["dot1", "dot2"],
            projectTitle: ["Tower Defense, 2025"],
            projectInfo: ["This is a classic tower defense game built in C++ using SFML, developed as a class group project. The goal was to create a fully functional game from scratch, handling everything from custom game logic and enemy AI to user interaction and rendering.<br><br>I worked on both core gameplay mechanics and the GUI, helping bring together a system where players place towers, manage resources, and defend against waves of enemies. It was also my first time working with SFML, so a big part of the challenge was learning how to manage graphics, timing, and user input in a lower-level environment.<br><br>It definitely pushed my programming skills and teamwork abilities, and gave me a whole new appreciation for the foundations behind game engines.<br><br>Skills used: C++, SFML"],
            optionalLink: [""]
        },
        project16: {
            images: ["images/project16-1.png", "images/project16-2.gif", "images/project16-3.gif", "images/project16-4.gif", "images/project16-5.gif"],
            captions: ["Random level generation for a Rogue-like", "Gameplay of Relict", "Excavation level of Relict", "Mini-prototype of the Hot Potato! game", "Mini-prototype of the Treasure Keeper game"],
            dots: ["dot1", "dot2", "dot3", "dot4", "dot5"],
            projectTitle: ["Game Prototypes, 2025"],
            projectInfo: ["Over the course of a semester, I developed a series of experimental game prototypes exploring different mechanics, genres, and tools. The goal was to iterate quickly, try newideas, and build up confidence with Unity (and game dev in general).<br><br><b>A Trip to the Store</b> (Bitsy)<br>A memory-based narrative game built in Bitsy, where choosing the wrong grocery items might summon a cult. I leaned into Bitsy’s limitations by creatively using tile art and dialogue to simulate a visual shopping list. My first time making a complete game solo!<br><br><b>Rhythm Game Prototype</b> (Unity)<br>Inspired by Guitar Hero, this prototype let players switch lanes and hit falling notes in time with the beat. I focused on learning Unity's event system, spawners, and timing-based mechanics.<br><br><b>Hot Potato!</b> (Unity)<br>A chaotic arcade-style game where players bounce potatoes to keep them in the air as more spawn in. I played with physics scripts, sprite variations, sound design, and UI elements like scoring. It was my first time customizing Unity’s physics in a meaningful way.<br><br><b>Sprinkler Wars</b> (Unity)<br>A two-player physics-based shooter where neighbors fight over a fence with hoses. While the final result wasn't my favorite, I learned a ton about projectile arcs and inter-script communication, and what not to do next time.<br><br><b>Treasure Keeper</b> (Unity)<br>A top-down shooter where players protect their treasure from waves of enemies. I implemented core mechanics like player movement, enemy AI, shooting, a health bar, scoring, and particles. This was my most complete prototype at the time, and I reused its systems in later games.<br><br><b>Relict</b> (Final Game) (Unity)<br>A procedurally generated roguelike where players explore dungeon floors, collect coins, fight off enemies, and protect an excavator in boss levels. Built over multiple iterations, I implemented dungeon generation, scaling difficulty, upgrades, turrets, chasers, a game loop, UI, and more. It’s my biggest solo Unity project to date—and I’m excited to keep expanding on it.<br><br>If you’d like to read more, follow the link below to my process journal!<br><br>Skills used: C#, Unity, GitHub"],
            optionalLink: ["https://github.com/katfrain/CART315/tree/main/Process%20Journal#process-journal"]
        }

    };

// loads the information of a specific project
    function loadProject(projectKey) {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        resetArrays();
        if (projects.hasOwnProperty(projectKey)) {
            currentProject = projects[projectKey];
            title.innerHTML = currentProject.projectTitle[0];
            info.innerHTML = currentProject.projectInfo[0];
            olink.innerHTML = currentProject.optionalLink;
            olink.href = currentProject.optionalLink;
            currentProject.dots.forEach((dotId, index) => {
                dot.push(dotId);
                document.getElementById(dotId).style.display = "inline-block";
            });
            if (currentProject.images.length == 1) {
                document.getElementById("prev").style.display = "none";
                document.getElementById("next").style.display = "none";
            } else {
                document.getElementById("prev").style.display = "block";
                document.getElementById("next").style.display = "block";
            }
            changeSlide(0);
            console.log(`${projectKey} loaded`);
        } else {
            console.error('Invalid project key:', projectKey);
        }
    }

// resets arrays so that a new project can be loaded
    function resetArrays() {
        dot.forEach(d => document.getElementById(d).style.display = "none");
        dot = [];
        currentProject = null;
        currentSlide = 0;
        previousDot = null;
        console.log("Arrays reset");
    }

// function to change the photo slide on the overlay
    function changeSlide(slideIndex) {
        if (!currentProject || slideIndex < 0 || slideIndex >= currentProject.images.length) {
            console.error('Invalid slide index:', slideIndex);
            return;
        }

        projectImg.onerror = function () {
            console.error('Failed to load image:', currentProject.images[slideIndex]);
            projectImg.src = 'images/default.png';
        };
        projectImg.src = currentProject.images[slideIndex];
        caption.innerHTML = currentProject.captions[slideIndex];

        document.getElementById(dot[slideIndex]).style.backgroundColor = "white";
        if (previousDot !== null && previousDot !== dot[slideIndex]) {
            document.getElementById(previousDot).style.backgroundColor = "#bbb";
        }
        previousDot = dot[slideIndex];
        currentSlide = slideIndex;
        console.log('Slide changed to:', slideIndex);
    }

// function to go forward or backward one slide
    function plusSlides(delta) {
        let newSlideIndex = currentSlide + delta;
        if (newSlideIndex < 0) {
            newSlideIndex = currentProject.images.length - 1;
        } else if (newSlideIndex >= currentProject.images.length) {
            newSlideIndex = 0;
        }
        changeSlide(newSlideIndex);
    }

// turns overlay on
    function on() {
        overlay.style.display = "inline-grid";
    }

// turns overlay off
    function off() {
        overlay.style.display = "none";
    }

// Gallery functionality
    let popup = document.getElementById('g-popup');
    let popupImg = document.getElementById("popup-img");
    let popupCaptionText = document.getElementById("popup-caption");
    let popupHeader = document.getElementById("head");

    function popupFunc(imgElement) {
        popup.style.display = "block";
        popupImg.src = imgElement.src;
        popupCaptionText.innerHTML = imgElement.alt;
        popupHeader.style.display = "none";
    }

    function closePopup() {
        popup.style.display = "none";
        popupHeader.style.display = "flex";
    }

    window.loadProject = loadProject;
    window.plusSlides = plusSlides;
    window.changeSlide = changeSlide;
    window.on = on;
    window.off = off;
    window.popupFunc = popupFunc;
    window.closePopup = closePopup;

    loadProject('project1');
});