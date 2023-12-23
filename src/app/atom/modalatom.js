import { atom } from "recoil";

export const modalState = atom({
  key: "modalState", 
  default: false, // default value (aka initial value)
});

export const postIdState = atom({
  key: "postIdState",
  default: "id", // default value (aka initial value)
});
