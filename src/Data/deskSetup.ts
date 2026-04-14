import  type { DeskSetup } from "src/Types/DeskSetup";

export const deskSetups: DeskSetup[] = [
  {
    id: "main-desk",
    title: "Main Study Desk",
    image: "/imgs/Desk-removebg-preview.png",
    device: "Windows Laptop",
    os: "Windows 11",
    editor: "VS Code",
    tools: [
      { name: "Keyboard", image: "/imgs/keyboard.jpg" },
      { name: "Monitor Stand", image: "/imgs/monitorStand.jpg" },
      { name: "Monitor", image: "/imgs/monitor.jpg" },
      { name: "Lamp", image: "/imgs/lamp.jpg" },
    ],
    stack: ["React", "TypeScript"],
    updatedAt: "2026-01-20"
  }
];
