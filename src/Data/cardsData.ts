// data/projects.ts


import img3 from  "../assets/imgs/pms.png";
import img4 from "../assets/imgs/TrndingMovieP.png";
import img5 from  "../assets/imgs/NoteBuds.png";
import img6 from  "../assets/imgs/ExpensesIncomeTrackApp.png";
import type { CardsInfo } from "../Types/CardsInfo";


export const CardData: CardsInfo[] = [
   {
    title: "Hotel Management System",
    date: "01/10/25",
    description: "A web app for managing hotel operations with role-based access: Frontoffice for receptionists to handle bookings and guest details, and Backoffice for managers/admins to manage rooms, shifts, and statistics.",
    stack: "React, TypeScript, Supabase (PostgreSQL), and Zustand.",
    image: img3,
  },
  {
    title: "Expense & Income Tracker App",
    date: "24",
    description: "A Java Swing app to manage daily expenses and incomes with MySQL support.",
    stack: "Java Swing, MySQL",
    image: img6,
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
