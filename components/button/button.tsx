import React from "react";
import classNames from "classnames";
import { Button } from "./button.types";
import styles from "./button.module.scss";

export function Button({ children, className, ...props }: Button) {
  return (
    <button
      {...props}
      className={classNames(
        className,
        styles.button,
        ["d-inline-flex", "py-2", "px-3", "gap-2", "fs-6"],
        {
          [styles.whatsapp]: props.kind === "whatsapp",
        }
      )}
    >
      {props.kind === "whatsapp" ? <i className={"bi bi-whatsapp"} /> : null}
      {children}
    </button>
  );
}
