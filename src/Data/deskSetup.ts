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
    tools: [
      { name: "Keyboard", image: "src/assets/imgs/keyboard.jpg" },
      { name: "Monitor Stand", image: "src/assets/imgs/monitorStand.jpg" },
      { name: "Monitor", image: "src/assets/imgs/monitor.jpg" },
      { name: "Lamp", image: "src/assets/imgs/lamp.jpg" },
    ],
    stack: ["React", "TypeScript"],
    updatedAt: "2026-01-20"
  }
];
