import { NavBar } from "./components/NavBar";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";
import { Home } from "./components/Home";
import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem("activeTab") || "Home";
  });
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  const bgColor = useColorModeValue("gray.100", "gray.800");

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* 1. NAVBAR - Fixed at top */}
      <Box as="header" py={4}>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </Box>
      <Box as="header" py={4}>
        {activeTab === "Home" && <Home />}
        {activeTab === "About" && <About />}
        {activeTab === "Contact" && <Contact />}
      </Box>
    </Box>
  );
}

export default App;
