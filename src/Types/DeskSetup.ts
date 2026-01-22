export type DeskSetup = {
  id: string;
  title: string;
  image: string;
  device: string;
  os: string;
  editor: string;
  tools: {
    name: string;
    image: string;
  }[];
  stack: string[];
  updatedAt: string;
};
