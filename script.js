document.addEventListener("DOMContentLoaded", function() {

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
          projectTitle : ["Personal Website, 2024"],
          projectInfo : ["I had a lot of fun designing and implementing my personal website. I went through multiple design iterations before I created something that I was satisfied with and felt like it represented my personality. I am very happy with the final design, but I will keep this website as a constant work in progress so that I can continue adding new things and polishing the old designs. <br><br> The most challenging part of this project was implementing the JavaScript, which I used to make these pop-up overlays that showcase my work.It had been a while since I had used JavaScript and this project was a nice refresher. <br><br> Skills used: HTML, CSS, JavaScript, Figma"],
          optionalLink : [""]
      },
      project2: {
          images: ["images/project2-1.png", "images/project2-2.png", "images/project2-3.png", "images/project2-4.png"],
          captions: ["The three posters", "Orthongonal", "Diagonal", "Freeform"],
          dots: ["dot1", "dot2", "dot3", "dot4"],
          projectTitle : ["Mock Poster Design, 2023"],
          projectInfo : ["Three posters I designed for an assignment at Concordia University. The first one had to be designed based on an orthogonal grid, the second one based on a diagonal grid, and the third one free from. We had a lot of freedom surrounding the subject of our posters, so I created a fake music festival featuring some of my favorite riot grrrl bands.<br><br>Skills used: Figma, Illustrator"],
          optionalLink : [""]
      },
      project3: {
        images: ["images/project3-3.png", "images/project3-2.png", "images/project3-1.png"],
          captions: ["Final album design", "Moodboard", "Different ideas I had for the cover"],
          dots: ["dot1", "dot2", "dot3"],
          projectTitle : ["Mock Album Design, 2023"],
          projectInfo : ["A mock album cover designed for an assignment at Concordia University. I really wanted to go a very illustrative route with a painting as the main focus of the cover. You can see the different iterations I went through on slide 3, as well as a mood board I put together to guide my work on slide 2. I created the painting in procreate and put the final design together in Figma.<br><br>Skills used: Procreate, Figma"],
          optionalLink : [""]
      },
      project4: {
        images: ["images/project4-1.png", "images/project4-2.png", "images/project4-4.png"],
        captions: ["Final version of the ticket", "First version of the ticket", "The banner"],
        dots: ["dot1", "dot2", "dot3"],
        projectTitle : ["Design work for school event, 2022"],
        projectInfo : ["I was asked to design a ticket and a banner for my High School’s reunion/grad do-over, as our grad was canceled by the Pandemic. I had a lot of fun transforming our school’s logo and colors in my design.<br><br>This was my first real graphic design project and it taught me a lot about vector editing, color choice, and making sure my design is practical for real life use.<br><br>Skills used: Illustrator"],
        optionalLink : [""]
    },
    project5: {
      images: ["images/project5-2.gif", "images/project5-3.png"],
      captions: ["Our little study knight in action!", "The chrome extension"],
      dots: ["dot1", "dot2"],
      projectTitle : ["StudyKnight, 2024"],
      projectInfo : ["StudyKnight is a Hackathon project I collaborated on with 2 other students. We created a chrome extension that acts as a game, a time tracker, and a personal checklist, as well as taking advantage of your own personal reward systems to keep you doing what's best for you. Using our own xp and level up system, completing tasks, staying on productive websites, and doing long sessions of work, gives you and your knight xp, eventually leveling up to grant you bigger and better weapons. You also add to your own list of distracting websites, which will decrease your xp, to encourage you to stay on track<br><br>I was in charge of the pixel art assets, UI design, and implementing this using html and css. This project pushed me out of my comfort zone creatively and I am really proud of what I have accomplished with Study Knight!<br><br>Skills used: HTML, CSS, Aseprite, Figma<br><br>"],
      optionalLink : ["https://devpost.com/software/study-knight"]
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
          }
          else {
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

      projectImg.onerror = function() {
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

  window.loadProject = loadProject;
  window.plusSlides = plusSlides;
  window.changeSlide = changeSlide;
  window.on = on;
  window.off = off;

  loadProject('project1');
});