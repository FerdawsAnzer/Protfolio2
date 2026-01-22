import  type { DeskSetup } from "src/Types/DeskSetup";
import deskImage from "src/assets/imgs/Desk-removebg-preview.png"; // path relative to this file

export const deskSetups: DeskSetup[] = [
  {
    id: "main-desk",
    title: "Main Study Desk",
    image: deskImage,
    device: "Windows Laptop",
    os: "Windows 11",
    editor: "VS Code",
    tools: ["Git", "Docker"],
    stack: ["React", "TypeScript"],
    updatedAt: "2026-01-20"
  }
];
