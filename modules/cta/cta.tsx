import React, { ButtonHTMLAttributes, useState } from "react";
import { Button } from "@/components";
import styles from "@/modules/cta/cta.module.scss";
import classNames from "classnames";

export function Cta() {
  const [buttonAnimationClassName, setButtonAnimationClassName] =
    useState<ButtonHTMLAttributes<HTMLButtonElement>["className"]>(undefined);

  return (
    <section className={classNames([styles.cta, "fs-5", "cursor-pointer"])}>
      <div
        className={classNames([
          "container",
          "py-4",
          "d-flex",
          "justify-content-center",
          "align-items-center",
          "gap-4",
        ])}
        onMouseEnter={() => {
          setButtonAnimationClassName("animate__tada");
        }}
        onMouseLeave={() => {
          setButtonAnimationClassName(undefined);
        }}
      >
        <span>
          Contact me now and let&apos;s work together on your next project!
        </span>
        <Button
          kind={"whatsapp"}
          className={classNames("animate__animated", buttonAnimationClassName)}
        >
          Contact me!
        </Button>
      </div>
    </section>
  );
}
