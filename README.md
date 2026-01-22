
# 🎮 Magic Forest — Web Game

**Magic Forest** is a browser-based interactive game for kids.
Players explore an enchanted forest, overcome obstacles, and interact with magical elements in a rich, immersive environment.

<img  src="https://github.com/user-attachments/assets/28e5bf80-6702-41fd-9d39-3d9644561a07" width="600">


Here is the game link: (https://akashebaev-ux.github.io/Magic-forest/)

---

## 📖 Overview

Magic Forest is a **2D/interactive web game** built with HTML, CSS, and JavaScript.
It is designed for desktop and mobile browsers, with responsive controls and engaging gameplay.
The goal of the game is to **avoid enemies and reach a destination**.

---
- [1.User Experience](#1-user-experience)
- [1.1 User Stories](#11-user-stories)
- [2. Design](#2-design)
- [2.1 Colour Scheme](#21-colour-scheme)
- [2.2 Typography](#22-typography)
- [3. Features](#3-features)
- [4. Technologies Used](#4-technologies-used)
- [4.1 Languages Used](#41-languages-used)
- [4.2 Frameworks, Libraries & Programs Used](#42-frameworks-libraries--programs-used)
- [5. Deployment](#5-deployment)
- [6. Testing](#6-testing)
- [6.1 Testing User Stories](#61-testing-user-stories)
- [6.2 Fixing Bugs](#62-fixing-bugs)
- [6.3 Manual Testing](#63-manual-testing)
- [6.4 Lighthouse](#64-lighthouse)
- [6.5 Validation](#65-validation)
- [6.5.1 W3C HTML and CSS](#651-w3c-html-and-css)
- [7. Credits](#7-credits)
- [7.1 Content](#72-content)
- [7.2 Media](#73-media)
- [7.3 Documentation and testing](#74-documentation-and-testing)
- [7.4 Authors and Acknowledgments](#75-authors-and-acknowledgments)

---

## 1. User Experience

Many of our users shared the same challenge:
they wanted to play an engaging game featuring a beautiful, fantasy-style character, but most available games offer paid content or limited graphics.

To address this, I created a game that combines both accessibility and visual quality:

Players get a free-to-play game with smooth animations and visually rich design.

# Magic Forest provides:

* 🎨 A themed game environment with immersive forest visuals and animations

* 🕹️ Simple and intuitive controls

* 🎯 Goals and challenges that reward exploration and player skill

* 🌿 Smooth performance across modern web browsers

Players are immersed in a magical world filled with forests, creatures, and interactive challenges.


## Target audience

**Magic Forest** is a family-friendly game designed for **children aged 5–12** and for **businesses or organisations** that wish to integrate a free interactive game into their spaces or platforms, such as cafés, kindergartens, and schools.


## 1.1 User Stories

## Client Goals

- View the **Magic Forest** game seamlessly across all device sizes, including mobile, tablet, and desktop.

  <img  src="https://github.com/user-attachments/assets/fb4d9af6-fd32-4812-b71e-94725c516d91" width="600">


## Potential Client Goals

- High-quality visual design and smooth character animations
- Engaging gameplay with simple rules and intuitive controls, suitable for children

# 📋 Project Planning & User Stories

GitHub project planning tools were used to track the progress of **user stories** throughout the development of Magic Forest. Each user story includes clearly defined **acceptance criteria** and **associated tasks**, ensuring structured and goal-oriented development.

<img  src="https://github.com/user-attachments/assets/4b1d2174-4c19-4e1d-9830-d9d12e9902ac" width="600">


The stories were organised into progress stages, which helped maintain focus, monitor development milestones, and ensure consistent forward momentum throughout the project lifecycle.

<img  src="https://github.com/user-attachments/assets/a28690c7-448b-4a9c-a6a4-4ea3d45435ff" width="600">




---

## 2. Design
## 2.1 Colour Scheme & Visual Style

Open-source Christmas elf images were used as an initial visual reference for the main character. To avoid plagiarism and ensure originality, the character was **regenerated using AI**, transforming it into a **2D game-ready design**.

Character movement animations were generated using [Pixverse.ai](https://app.pixverse.ai/onboard). Individual animation frames were then extracted from the generated video using [miniWebtool] (ru.miniwebtool.com) – Video Frame Extractor, allowing precise control over sprite animations.

To ensure seamless integration with the game environment, the background of each extracted frame was removed using [Carve.Photos](carve.photos), resulting in transparent images that blend cleanly with the game background.

The forest background was generated using ChatGPT, and the colour palette [ImageColorPicker.com](https://imagecolorpicker.com/) was selected to support a fantasy-style visual theme. This ensured visual consistency between the animated character and the environment, contributing to an immersive and cohesive game experience.

## 2.2 Typography

Google Fonts are used to style the text on the *Magic Forest* game’s home page.

**Great Vibes** is applied to the main page titles, enhancing the magical and fantasy-inspired atmosphere of the game.


## 3. Features

The **Magic Forest** game consists of **two main pages**, accessible via the **Home** and **Play** buttons.

# Pages Overview

**Home Page**
Presents general information about the game and includes a **Play** button that allows users to start the game.

<img  src="https://github.com/user-attachments/assets/c15657a8-95d3-4fa9-971b-7b28cc3db28d" width="600">



**Game Page**
Hosts the game itself and includes a **Home** button, allowing players to return to the main page at any time.

<img  src="https://github.com/user-attachments/assets/ba46305c-3911-4516-9e51-e71bdc862767" width="600">


# Gameplay Description

The game is designed as a simple, forward-moving challenge:

* The player moves forward and must **jump over obstacles**.

* Each successful action increases the player’s score.

* When the player reaches a **score of 100**, a **win screen animation** appears, accompanied by a winning sound effect.

* The player can press **R** to restart the game after winning.
  

  <img  src="https://github.com/user-attachments/assets/2d496e95-0db1-40f6-9f0a-966be53aa80a" width="600">



If the player fails to jump over an obstacle:

* A **lose screen animation** is displayed.

* A hit sound effect is played.

* The player can press **R** to restart the game.
  

  <img  src="https://github.com/user-attachments/assets/2645b147-0448-4f07-a1d0-176da788d8a3" width="600">


# Controls

The control buttons used in the game are listed below.

## 🕹️ Controls

*(Fill in with actual controls from your game)*

| Action     | Control   |
| ---------- | --------- |
| Move Right |→ (Right Arrow)|
| Jump       | R    |

---


## 🚀 Getting Started

### 🎮 Play

You can play the game directly in your browser:

👉 [https://akashebaev-ux.github.io/Magic-forest/game.html](https://akashebaev-ux.github.io/Magic-forest/game.html)

---



## 📦 Project Structure

```
Magic-forest/
├── index.html
├── game.html
└── README.md


├── assets/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── png/webp
├── audio/
│   └── MP3/

```

---
## 4.🛠️ Technologies Used
## 4.1 Languages Used


Magic Forest is built with:

* **HTML** — Structure of the game pages
* **CSS** — Visual styling and responsive layout
* **JavaScript** — Game logic, animation, and interactivity
* **Web Audio** — Sound effects and music [https://pixabay.com]



## 4.2 Frameworks, Libraries & Programs Used

- [GitHub](https://github.com/) – Deployment and version control. The repository for storing project files.
- [Google Fonts](https://fonts.google.com/) – Integrated to apply the chosen typography across the website.
- Chrome DevTools – testing, debugging, and checking responsiveness.
- [Favicon.io](https://favicon.io/) – Used to create the site’s emoji favicon.
- [Amiresponsive](https://ui.dev/amiresponsive) – Used to display how the website appears across multiple device sizes.
- [Pixverse.ai](https://app.pixverse.ai/onboard) – Used to generate the custom AI-created video.
- [Ezgif](https://ezgif.com/video-to-gif) - Used to generate the GIF images.
- [FreeConvert](https://www.freeconvert.com/) – Used to change the image format from PNG to WebP.
- [ImageColorPicker.com](https://imagecolorpicker.com/) – Used to select and refine colour values for the game design.
- [miniWebtool] (ru.miniwebtool.com) – Used to extract sprite images from animation videos.
- [Carve.Photos](carve.photos) – Used to remove image backgrounds and create transparent assets.
- [I123APPS](online-video-cutter.com) — Used to crop videos.




## 5. Deployment

**Cloning the Repository / Running the Project Locally**

# Local Development

The project repository was cloned to the local development environment using the following steps:

1. Installed **GitHub Desktop**.

2. Logged in to a GitHub account through the client.

3. Selected **File → Clone Repository**.

4. Cloned the repository using the following command:


      ```bash
   git clone https://github.com/akashebaev-ux/Magic-forest.git
   ```

Selected the **Magic Forest** repository, specified the destination folder, and clicked **Clone**.

This process allowed the project to be accessed, modified, and run locally for development and testing purposes.


# Publishing the Site

The project was deployed using **GitHub Pages** by following these steps:

1. Opened the project’s GitHub repository and navigated to **Settings**.

2. Selected **Pages** under **Code and automation**.

3. Configured the deployment settings as follows:

* **Source**: Deploy from a branch

* **Branch**: main

* **Folder**: / (root)

Once saved, the site was automatically deployed.


# Live Deployment

This project is deployed via **GitHub Pages**:

* 🌐 **Live site**: ```https://akashebaev-ux.github.io/Magic-forest/```

* 🔄 Automatically updated whenever changes are pushed to the **main** branch


---

## 6. Testing

## 6.1 Testing User Stories

## Testing Client Goals

| Feature | Implementation |
|------|--------|
| **1. As a user, I want to see a friendly homepage with a responsive design.**<br><br>- [x] Create home page<br>- [x] Create background image<br>- [x] Basic project structure<br>- [x] Player placeholder sprite images | <div align="center"><img src="https://github.com/user-attachments/assets/e95e962f-1192-489b-8da4-8c191586a204" width="240" height="160"> <img src="https://github.com/user-attachments/assets/b11df667-64fd-4b13-94dd-f6cddf057a30" width="240" height="160"></div><br>✔ The layout is fully responsive and displays correctly across multiple devices and modern browsers. |
| **2. As a user, I want to see the core mechanics.**<br><br>- [x] Player movement (run + jump)<br>- [x] Gravity & physics<br>- [x] Collision detection | <div align="center"><img src="https://github.com/user-attachments/assets/3ac7ebd9-b620-49a5-a2ab-d4b51b6a5e8b" width="240" height="160"></div><br>✔ Met. All core mechanics—player movement, gravity and physics, and collision detection—are fully implemented and function as intended, allowing users to clearly experience the fundamental gameplay systems. |
| **3. As a user, I want to experience a polished and interactive interface.**<br><br>- [x] Animations<br>- [x] Sound effects<br>- [x] Background music<br>- [x] UI (score, lives, timer)<br>- [x] Bug fixes | <div align="center"><img src="https://github.com/user-attachments/assets/0cc115c8-afea-438d-bfb2-826a25f8783b" width="240" height="160"> <img src="https://github.com/user-attachments/assets/7edf7e4b-ae4b-43e2-ba78-45917ede9471" width="240" height="160"></div><br>✔ *Partially met.* Core gameplay elements function as intended; however, some interactivity is limited on mobile devices. Future iterations should introduce enhanced touch-based controls and additional visual cues to improve the mobile user experience. |




**Testing Player Goals**

**Goal: Ability to play and enjoy the game**
Result: ✔ The game includes animated visuals, responsive movement, and engaging gameplay mechanics suitable for the target age group.

**Goal: Clear and easy-to-understand instructions**
Result: ✔ Instructions are concise and the game operates consistently across multiple browsers, ensuring a smooth and intuitive experience.


## 6.2 Fixing Bugs

Throughout the development phase, testing was conducted continuously. **Chrome DevTools** played a key role in reviewing the site, identifying issues, and verifying fixes as new features were implemented.

Several issues were discovered during testing and resolved accordingly:

**📱 Motion Control Issues on Mobile Devices**

* The touch control system initially failed to respond correctly on mobile devices.

* This issue occurred because the game loop continuously refreshed the canvas, causing certain control functions to interrupt the main *run* function.

* Additionally, the background image was applied simultaneously via *CSS* and *JavaScript*, which interfered with touch input detection and rendered the controls ineffective.

* The issue was diagnosed using **Chrome DevTools** and **JSFiddle**, allowing the logic conflict to be identified and resolved.

* After refactoring the background rendering logic and adjusting the game loop, touch controls functioned as expected.


## 6.3 Manual Testing

**Site Function Testing**

Comprehensive manual testing was carried out across multiple devices to ensure consistent functionality, performance, and responsiveness.

# Devices Tested

* **Laptop:**

* MacBook Air 13" (2025)

* ASUS X515 i5 (2023)

* **Mobile:**

* iPhone 16

* iPhone 12

* **Tablet:**

* Samsung Galaxy Tab S7

**Browsers Used:**

- Google Chrome
- Safari

All key features, interactive elements, and page layouts were reviewed across each device and browser combination to verify correct behaviour, responsiveness, and overall usability.


## 6.4 Lighthouse

Using the Lighthouse feature in Chrome DevTools, I assessed the website’s performance, accessibility, and best-practice compliance for both mobile and desktop views.

<img  src="https://github.com/user-attachments/assets/0208a835-75ac-44ab-9814-a10c0c4dfa3b" width="600">


## 6.5 Validation
## 6.5.1 W3C HTML and CSS

To ensure code quality, I validated every HTML page and the CSS file using the official W3C validators.

|   |   |
|---|---|
|<img  src="https://github.com/user-attachments/assets/092ff79e-600c-4653-aefd-b5b516901810" width="600">|<img  src="https://github.com/user-attachments/assets/676018f2-2553-4145-98a2-041e899baefe" width="600">|


----

CSS validator [Jigsaw](https://jigsaw.w3.org/css-validator/validator)

<img src="https://github.com/user-attachments/assets/db51eff5-3b6f-4b27-b0b5-4a9a24810fbd" width="600">


**Note:** .scroll-gallery::-webkit-scrollbar { display: none; } was used to apply custom styles to the scrollbar and hide it while preserving its primary functionality.

---

JavaScript validator JSHint [JSHint](https://jshint.com/)

<img  src="https://github.com/user-attachments/assets/363c0c2e-f9de-4c79-a845-616642bd9a72" width="600">


# 7. Credits

## 7.1 Content

[ChatGPT (OpenAI)](https://chatgpt.com/) – Used to assist in generating and refining portions of the website’s images.
[ImageColorPicker](https://imagecolorpicker.com/) – Referenced in section 2.1 for color palette generation and design inspiration.
[Google Fonts](https://fonts.google.com/) – Referenced in section 2.2 for font selection and typography.
[Favicon.io](https://favicon.io/) – Used to create the website’s emoji favicon.


## 7.2 Media

- [Pixverse.ai](https://app.pixverse.ai/onboard) – utilized for creating customized AI-generated videos.

- [Pixabay](pixabay.com) – Used to source the hit sound effect for the game.
Sound Effect by <a href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=352447">Universfield</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=352447">Pixabay</a>

- Used to source the winner sound effect for the game.
Sound Effect by <a href="https://pixabay.com/users/superpuyofãns1234-45913026/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=404167">Sophia Conçeição</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=404167">Pixabay</a>

## 7.3 Documentation and testing

The sources listed below served as foundational references in shaping the structure, development approach, and documentation of this project:

* Love Math and Boardwalk Games – README templates and overall website structures used as guidance
* Markdown Cheat Sheet
 – Used for correct Markdown syntax and formatting
* Pawsome README Template – Shared via Discord and referenced for README organisation
* Diffchecker
 – Used to compare file changes during development
* W3C Autoprefixer
 – Used to ensure CSS browser compatibility
* Amiresponsive
 – Used to display the website across multiple device screen sizes
* [YouTube Reference Video](https://youtu.be/CY0HE277IBM?si=WliDk4A9ui5E4MNB)
 – Used as inspiration and a learning reference for game mechanics and structure


## 7.4 Authors and Acknowledgments

Created and maintained by Akashebaev-UX.

---

## 🧠 Future Improvements

Potential enhancements include:

* 🎵 Background music and sound effects
* 🧟 Enemies, hazards, and power-ups
* 📈 Score and leaderboard system
* 🎨 Additional levels and themes
* 🧩 Improved animations and particle effects

---

## 👤 Author

**Akashebaev-UX**
Original game concept and implementation.

---

## 📌 Project Status

🚧 **In Progress / Growing**
Magic Forest continues to be refined with new gameplay mechanics and features.
