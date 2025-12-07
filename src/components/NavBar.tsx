import { Avatar, Flex } from "@chakra-ui/react";
import { Tabs } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import type { NavBarProps } from "@/Types/NavBarProps";

export const NavBar = ({ activeTab, setActiveTab }: NavBarProps) => {
  return (
    <Flex as="nav" w="100%" py={6} justify="center">
      {/* Inner container with fixed width */}
      <Flex
        w="100%"
        maxW="800px" // ← Fixed width, centered
        px={4}
        align="center"
        justify="space-between"
      >
        {/*Avatar */}
        <Avatar.Root size="md">
          <Avatar.Image
            src="https://ferdawsanzer.github.io/MyPortfolioFST/imgs/profilePicture-removebg-preview.png"
            alt="Your Name"
          />
          <Avatar.Fallback name="Your Name" />
        </Avatar.Root>

        {/* Tabs as a flex item */}
        <Flex align="center" flex="1" justify="center">
          <Tabs.Root
            defaultValue={activeTab}
            onValueChange={(details) => setActiveTab(details.value)}
            variant="plain"
            css={{
              "--tabs-indicator-bg": "colors.gray.subtle",
              "--tabs-indicator-shadow": "shadows.xs",
              "--tabs-trigger-radius": "radii.full",
            }}
          >
            <Tabs.List>
              <Tabs.Trigger value="Home">Home</Tabs.Trigger>
              <Tabs.Trigger value="About">About</Tabs.Trigger>
              <Tabs.Trigger value="Contact">Contact</Tabs.Trigger>
              <Tabs.Indicator />
            </Tabs.List>
          </Tabs.Root>
        </Flex>

        {/* Color mode button */}
        <ColorModeButton />
      </Flex>
    </Flex>
  );
};
