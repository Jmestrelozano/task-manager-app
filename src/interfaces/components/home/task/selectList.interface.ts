import { UseFormRegisterReturn } from "react-hook-form";

export interface ISelectList {
  lists: string[];
  selected: string;
  setSelected: (value: string) => void;
  label?: string;
  register?: UseFormRegisterReturn;
}
