import { Box } from "@chakra-ui/react";
import type { DeskSetup } from "src/Types/DeskSetup";

type Props = {
  desk: DeskSetup;
};

export function DeskCard({ desk }: Props) {
  return (
    <div className="desk-card">
      <Box borderRadius="md" overflow="hidden" mb={2} h="350px" w="560px">
        <img
          src={desk.image}
          alt={desk.title}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Box>
      <h3>{desk.title}</h3>

      <p>
        <strong>Device:</strong> {desk.device}
      </p>
      <p>
        <strong>OS:</strong> {desk.os}
      </p>
      <p>
        <strong>Editor:</strong> {desk.editor}
      </p>

      <div>
        <strong>Stack:</strong>
        {desk.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div>
        <strong>Tools:</strong>
        {desk.tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>

      <small>Updated: {desk.updatedAt}</small>
    </div>
  );
}
