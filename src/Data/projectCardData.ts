import type { ProjectCardInfos } from "src/Types/projectCardInfos"
import img3 from  "public/imgs/pms.png";
import img4 from "public/imgs/TrndingMovieP.png";
import img5 from  "public/imgs/NoteBuds.png";
import img6 from  "public/imgs/ExpensesIncomeTrackApp.png";
export const projectCardData : ProjectCardInfos[] = [
  {
    title: "Project Management System", 
    date: "March 2023",
    description: "A comprehensive project management web application that allows teams to collaborate, track progress, and manage tasks efficiently.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    image: img3,
  },
  
  {
    title: "Trending Movies Finder",
    date: "2024",
    description: "A React project that fetches trending movies using the TMDB API.",
    stack: ["React", "TMDB API", "CSS"],
    image: img4,
  },
  {
    title: "NoteBuds Web App",
    date: "2023",
    description: "A notes and to-do web app with login, registration, and responsive UI.",
    stack: ["JavaScript", "PHP", "MySQL", "HTML", "CSS"],
    image: img5,
  },
  {
    title: "Expense & Income Tracker App",
    date: "24",
    description: "A Java Swing app to manage daily expenses and incomes with MySQL support.",
    stack: ["Java Swing", "MySQL"],
    image: img6,
  }
]