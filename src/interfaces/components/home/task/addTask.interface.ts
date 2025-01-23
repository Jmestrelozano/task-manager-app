import { Dispatch, SetStateAction } from "react";
import { Task } from "./task.interface";

export interface IAddTask {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  task?: Task;
}
