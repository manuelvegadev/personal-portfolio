import { ReactNode } from "react";
import styles from "./tag.module.scss";

interface ITagProps {
  children: ReactNode;
  hoverColor?: string;
}

export function Tag({ children, hoverColor }: ITagProps) {
  const customStyles: { [key: string]: string } = {};

  if (hoverColor) {
    customStyles["--hover-color"] = `var(--color-${hoverColor})`;
  }

  return (
    <span className={styles.tag} style={customStyles}>
      {children}
    </span>
  );
}
