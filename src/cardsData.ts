// data/projects.ts


import img3 from  "./assets/imgs/project3.jpeg";
import img4 from  "./assets/imgs/TrndingMovieP.png";
import img5 from  "./assets/imgs/NoteBuds.png";
import img6 from  "./assets/imgs/ExpensesIncomeTrackApp.png";
import type { CardsInfo } from "./Types/CardsInfo";


export const CardData: CardsInfo[] = [
  {
    title: "Expense & Income Tracker App",
    date: "24",
    description: "A Java Swing app to manage daily expenses and incomes with MySQL support.",
    stack: "Java Swing, MySQL",
    image: img6,
  },
  {
    title: "Seattle Ferris",
    date: "1/4/23",
    description: "Ferris wheel at night in the rain",
    stack: "Java Swing, MySQL",
    image: img3,
  },
  {
    title: "Trending Movies Finder",
    date: "2024",
    description: "A React project that fetches trending movies using the TMDB API.",
    stack: "React, TMDB API, CSS",
    image: img4,
  },
  {
    title: "NoteBuds Web App",
    date: "2023",
    description: "A notes and to-do web app with login, registration, and responsive UI.",
    stack: "JavaScript, PHP, MySQL, HTML, CSS",
    image: img5,
  },
];
