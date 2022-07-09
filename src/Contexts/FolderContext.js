import { createContext } from "react";

export const FolderContext = createContext({
  currentFolder: "",
  setCurrentFolder: () => {},
});
