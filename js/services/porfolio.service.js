'use stricts'

var gProjects = [
    {
        id: "books",
        name: "Books App",
        title: "Admin service application",
        desc: "An admin user service application for books store.\n Allow to make chnages as removing or adding books. ",
        url: "https://talbenatiya.github.io/books-proj/",
        publishedAt: "July 2022",
        labels: ["Books", "Admin", "Application"],
        img: "img/portfolio/books1.jpg"
    },
    {
        id: "mineswipper",
        name: "Mineswipper",
        title: "Mineswipper game",
        desc: "Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.",
        url: "https://talbenatiya.github.io/sprint1-minesweeper/",
        publishedAt: "21/07/2022",
        labels: ["Matrixes", "Classic Games"],
        img: "img/portfolio/mineswipper1.jpg"
    },
    {
        id: "pacman",
        name: "Pac-man",
        title: "Pac-man game",
        desc: "Pac-Man is an action maze chase video game. the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding colored ghosts",
        url: "https://talbenatiya.github.io/game-pacman/",
        publishedAt: "July 2022",
        labels: ["Matrixes", "Classic Games"],
        img: "img/portfolio/pacman.jpg"
    },
    {
        id: "ballboard",
        name: "Ball Board",
        title: "Ball board game",
        desc: "Ball board is a video game. Balls are generated every few seconds, to win collect all the balls. ",
        url: "https://talbenatiya.github.io/ball-board/",
        publishedAt: "July 2022",
        labels: ["Matrixes", "Video Games"],
        img: "img/portfolio/mineswipper1.jpg"
    },
    {
        id: "touchnums",
        name: "Touch Nums",
        title: "Touch-nums game",
        desc: "You have to touch numbers quickly. The best score is the least time to touch all numbers in order.",
        url: "https://talbenatiya.github.io/Touch-nums/",
        publishedAt: "July 2022",
        labels: ["Matrixes", "Video Games"],
        img: "img/portfolio/touchnums1.jpg"
    },
    {
        id: "inpicture",
        name: "In Picture",
        title: "In picture game",
        desc: "In-picture is a visual comprehension game where the user is given options and must choose the option that resembles the picture.",
        url: "https://talbenatiya.github.io/In-picture/",
        publishedAt: "July 2022",
        labels: ["Pictures", "Kids Games"],
        img: "img/portfolio/inpicture.jpg"
    },
]


function getProjectForDisplay() {
    return gProjects
}


function getProjectById(id) {
    return gProjects.find(project => project.id === id)
}
