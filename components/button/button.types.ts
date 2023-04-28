import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface Button
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  kind?: "whatsapp";
}
