import { Dispatch, SetStateAction } from "react";

interface LevelProps {
  setCurrentLevel: Dispatch<SetStateAction<number>>
  setNotification: Dispatch<SetStateAction<string>>
}

export type {LevelProps}