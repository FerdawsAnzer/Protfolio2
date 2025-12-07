import { NavBar } from "./components/NavBar";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode";
import { Home } from "./components/Home";
import { useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
function App() {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const [activeTab, setActiveTab] = useState("Home"); // default pag
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
