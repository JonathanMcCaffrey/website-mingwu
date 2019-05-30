import { DESELECT_IMAGE, SELECT_IMAGE } from "../types";
import console from "console";

export const deselectImage = () => ({
  type: SELECT_IMAGE
});

export const selectImage = (newId: string) => ({
  type: DESELECT_IMAGE,
  id: newId
});
