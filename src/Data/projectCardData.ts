import type { ProjectCardInfos } from "src/Types/projectCardInfos"
export const projectCardData : ProjectCardInfos[] = [
  {
    title: "Hotel Management System", 
    date: "October 2025",
    description: "A full-stack web application designed to manage hotel operations efficiently through role-based access control. I implemented separate Front Office and Back Office modules, enabling receptionists to manage bookings and guest information, while managers and admins can handle room management, staff shifts, and operational statistics. The system improves workflow organization and reduces manual errors in daily hotel management.",
    stack: ["React", "TypeScript", "Supabase", "chadcn", "Zustand"],
    image: "/imgs/pms.png",
  },
  
  {
    title: "Trending Movies Finder",
    date: "2024",
    description: "A React application that integrates with the TMDB API to display trending movies in real time. I focused on API integration, state management, and building a clean, responsive user interface that allows users to explore movie details dynamically.",
    stack: ["React", "TMDB API", "CSS"],
    image: "/imgs/TrndingMovieP.png",
    githubUrl:"https://github.com/FerdawsAnzer/TrendingMovies-react"
  },
  {
    title: "Banking Management System",
    date: "2023",
    description: "A web-based, API-driven Bank Management System designed to streamline core banking operations. I implemented customer and staff workflows for account management, transactions, and loan processing, with role-based access for admins. The system ensures data integrity through automated balance updates and database-level validations.",
    stack: ["JavaScript", "TypeScript", "MySQL", "HTML", "CSS"],
    image: "/imgs/BMS.png",
    githubUrl:"https://github.com/FarahArya/Banking_Management_System"
  },
  {
    title: "Expense & Income Tracker App",
    date: "24",
    description: "A Java Swing app to manage daily expenses and incomes with MySQL support.",
    stack: ["Java Swing", "MySQL"],
    image: "/imgs/ExpensesIncomeTrackApp.png",
    githubUrl:"https://github.com/FerdawsAnzer/-ExpensesIncomesTracker"
  }
]