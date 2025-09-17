// src/projects.js
const projects = [
    {
        image: "images/project11-cover.png",
        title: "KAMBA (WIP)",
        description: "Personal Project // 2025",
        tags: ["Godot", "GDScript", "Aseprite"],
        info: "Kat and Mae’s Big Adventure (Work in Progress)" +
            "\n\nKAMBA is a 2D platformer I am developing with my friend Mae as a personal project to explore and learn the Godot game engine. While progress has been gradual due to our school and work commitments, the process has been both rewarding and fun as we experiment with different systems." +
            "\n\nOne of the most significant features we’ve built so far is the state machine that governs both the playable character and the enemies. Once implemented, it became a powerful tool for creating smooth transitions between states and managing complex behaviors. At the moment, I’m focusing on refining the enemy logic, while Mae is enhancing the player character’s mechanics.",
        gallery: [
            "images/project11-cover.png",
            "images/project11-1.gif",
        ],
    },
    {
        image: "images/project10-cover.png",
        title: "Personal Website",
        description: "personal project // 2024",
        tags: ["React", "HTML", "CSS", "JavaScript", "Figma", "Aseprite"],
        info: "I had a lot of fun designing and implementing my personal website. I went through multiple design iterations before I created something that I was satisfied with and felt like it represented my personality. I am very happy with the final design, but I will keep this website as a constant work in progress so that I can continue adding new things and polishing the old designs. " +
            "\n\nThe most challenging part of this project was relearning React, as it had been some time since I used it last, as well as getting the parallax background to work on all monitor sizes.  ",
        gallery: [
            "images/project10-cover.png",
            "images/project10-1.png",
        ],
    },
/*    {
        image: "images/project9-cover.jpg",
        title: "Band Together",
        description: "Ubisoft GameLabs // 2025",
        tags: ["Blender", "Unity", "Figma", "Github"],
        info: "Band Together is a 3D co-op puzzle game created for Ubisoft’s 2025 GameLab Competition, where players must work together to solve challenges. Our team worked on the game over the course of a semester." +
            "\n\nI was in charge of creating almost all of the 3D assets for the game, which was both exciting and terrifying since it was my first time making game-ready models. I learned all about asset creation on the go, including balancing visual style, performance, and Unity integration.",
        gallery: [
            "images/project9-cover.jpg",
            "images/project9-1.png",
        ],
    },*/
    {
        image: "images/project6-cover.png",
        title: "Game Prototypes",
        description: "assignment - Concordia University // 2025",
        tags: ["C#", "Unity", "Github"],
        info: "Over the course of a semester, I developed a series of experimental game prototypes exploring different mechanics, genres, and tools. The goal was to iterate quickly, try new ideas, and build up confidence with Unity (and game dev in general)." +
            "\n\nA Trip to the Store (Bitsy)" +
            "\nA memory-based narrative game built in Bitsy, where choosing the wrong grocery items might summon a cult. I leaned into Bitsy’s limitations by creatively using tile art and dialogue to simulate a visual shopping list. My first time making a complete game solo!" +
            "\n\nRhythm Game Prototype (Unity)" +
            "\nInspired by Guitar Hero, this prototype let players switch lanes and hit falling notes in time with the beat. I focused on learning Unity's event system, spawners, and timing-based mechanics." +
            "\n\nHot Potato! (Unity)" +
            "\nA chaotic arcade-style game where players bounce potatoes to keep them in the air as more spawn in. I played with physics scripts, sprite variations, sound design, and UI elements like scoring. It was my first time customizing Unity’s physics in a meaningful way." +
            "\n\nSprinkler Wars (Unity)" +
            "\nA two-player physics-based shooter where neighbors fight over a fence with hoses. While the final result wasn't my favorite, I learned a ton about projectile arcs and inter-script communication, and what not to do next time.\n" +
            "\n\nTreasure Keeper (Unity)" +
            "\nA top-down shooter where players protect their treasure from waves of enemies. I implemented core mechanics like player movement, enemy AI, shooting, a health bar, scoring, and particles. This was my most complete prototype at the time, and I reused its systems in later games." +
            "\n\nRelict (Final Game) (Unity)" +
            "\nA procedurally generated roguelike where players explore dungeon floors, collect coins, fight off enemies, and protect an excavator in boss levels. Built over multiple iterations, I implemented dungeon generation, scaling difficulty, upgrades, turrets, chasers, a game loop, UI, and more. It’s my biggest solo Unity project to date—and I’m excited to keep expanding on it.\n" +
            "\n\nIf you’d like to read more, follow the link below to my process journal!\n" +
            "\n\nhttps://github.com/katfrain/CART315/tree/main/Process%20Journal#process-journal",
        gallery: [
            "images/project6-cover.png",
            "images/project6-1.gif",
            "images/project6-2.gif",
            "images/project6-3.gif",
            "images/project6-4.gif",
        ],
    },
    {
        image: "images/project5-cover.png",
        title: "Tower Defense",
        description: "assignment - Concordia University // 2025",
        tags: ["C++", "SFML"],
        info: "This is a classic tower defense game built in C++ using SFML, developed as a class group project. The goal was to create a fully functional game from scratch, handling everything from custom game logic and enemy AI to user interaction and rendering." +
            "\n\nI worked on both core gameplay mechanics and the GUI, helping bring together a system where players place towers, manage resources, and defend against waves of enemies. It was also my first time working with SFML, so a big part of the challenge was learning how to manage graphics, timing, and user input in a lower-level environment." +
            "\n\nIt definitely pushed my programming skills and teamwork abilities, and gave me a whole new appreciation for the foundations behind game engines.",
        gallery: [
            "images/project5-cover.png",
            "images/project5-1.png",
        ],
    },
    {
        image: "images/project4-cover.png",
        title: "UniTrade",
        description: "hackathon entry - ConUHacks IX // 2025",
        tags: ["React", "Figma", "Github"],
        info: "UniTrade is a mobile app designed to help students trade and barter items with others on campus. It was developed over 24 hours during ConUHacks IX by a team of four. I contributed to the project by designing the UI/UX in Figma and building responsive UI components using React Native." +
            "\n\nThis project was especially challenging due to the tight timeline and the fact that it was our team’s first time using React Native. While I was able to draw on my web development experience, adapting to mobile development required a quick learning curve and collaboration under pressure. " +
            "\n\nhttps://devpost.com/software/unitrade-oexp03",
        gallery: [
            "images/project4-1.png",
            "images/project4-2.jpg",
            "images/project4-3.jpg",
            "images/project4-4.jpg",
        ],
    },
    {
        image: "images/project3-cover.png",
        title: "Flesh Garden",
        description: "game jam entry - Gamerella 2024 // 2024",
        tags: ["Godot", "GDScript", "Github"],
        info: "Flesh Garden is a first-person point-and-click survival horror game created for Gamerella 2024, a 2-day game jam. The game's objective is to survive. As your hunger wanes, so does the hunger of the fire that keeps the darkness at bay. Sustain the both of you using resources from your flesh garden, But beware—neglect either, and you risk starvation or becoming fuel for the fire yourself.\n" +
            "\n\nMy role in the team was focused on programming, marking my first experience in a game jam as a programmer. To ensure manageability, we started with a small scope and gradually expanded as the project progressed. I developed key systems, including the inventory, the garden's growth mechanics, and the soup-cooking system. We utilized Godot as our game engine and GitHub for seamless collaboration. This project significantly boosted my confidence in game design, programming, and using both Godot and GitHub effectively. " +
            "\n\nhttps://wevwyrm.itch.io/fleshgarden",
        gallery: [
            "images/project3-cover.png",
            "images/project3-1.png",
            "images/project3-2.png",
        ],
    },
    {
        image: "images/project7-cover.png",
        title: "Barking Kitten",
        description: "gamejam entry - OPERATION: PHANTOM GAME // 2024",
        tags: ["Aseprite", "Unity"],
        info: "Barking Kitten is a 2D platformer created in one week for the OPERATION: PHANTOM GAME game jam." +
            "\n\nI worked on the pixel art for the game, designing the main character, enemies, and environmental tiles. It was a great chance to deepen my understanding of pixel art and dip my toes into 2D animation.",
        gallery: [
            "images/project7-cover.png",
            "images/project7-1.png",
            "images/project7-2.png",
            "images/project7-3.gif",
        ],
    },
    {
        image: "images/project2-cover.png",
        title: "StudyKnight",
        description: "hackathon entry - ConUHacks VIII // 2024",
        tags: ["HTML", "CSS", "JavaScript", "Figma", "Aseprite"],
        info: "StudyKnight is a Hackathon project I collaborated on with 2 other students. We created a chrome extension that acts as a game, a time tracker, and a personal checklist, as well as taking advantage of your own personal reward systems to keep you doing what's best for you. Using our own xp and level up system, completing tasks, staying on productive websites, and doing long sessions of work, gives you and your knight xp, eventually leveling up to grant you bigger and better weapons. You also add to your own list of distracting websites, which will decrease your xp, to encourage you to stay on track" +
            "I was in charge of the pixel art assets, UI design, and implementing this using html and css. This project pushed me out of my comfort zone creatively and I am really proud of what I have accomplished with Study Knight!" +
            "\n\nhttps://devpost.com/software/study-knight",
        gallery: [
            "images/project2-1.gif",
            "images/project2-2.png",
        ],
    },
    {
        image: "images/project1-1.png",
        title: "fishTank",
        description: "assignment - Concordia University // 2022",
        tags: ["HTML", "CSS", "JavaScript", "Aseprite"],
        info: "fishTank is an interactive website/mini-game designed around caring for fish. While the objective is quite simple, the creation of this website taught me so much about JavaScript, which I was still unfamiliar with at the time of beginning this project." +
            "\n\nThis was also my first big pixel art project and it's where I really found my footing in the medium. Working on this project taught me so much about drawing in pixel art, from laying out the shapes to shading, which was all very different from the traditional art that I was used to. " +
            "\n\nhttps://hybrid.concordia.ca/k_frain/fishtank.html",
        gallery: [
            "images/project1-1.png",
            "images/project1-cover.png",
        ],
    },
    {
        image: "images/project8-cover.png",
        title: "Isometric Kitchen Scene",
        description: "personal project // 2022",
        tags: ["Blender"],
        info: "This was one of my first big projects done in Blender. With my previous projects, I followed detailed tutorials step by step, and while it introduced me to the fundamentals of the software, I realized I was not learning a lot. With this project, I challenged myself to try everything by myself first, before consulting other help. This pushed me to experiment with the tools of the program and cemented important information in my mind. I started with the big shapes, got creative with the smaller details, and looked into tutorials when I got stuck. I enjoyed filling the room with clutter, such as plants, plates, and strawberries I made in a previous exercise. This project pushed me out of my comfort zone and taught me so many valuable lessons about 3D modeling.",
        gallery: [
            "images/project8-cover.png",
            "images/project8-1.gif",
        ],
    },
];

export default projects;
