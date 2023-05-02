import classNames from "classnames";
import Link from "next/link";
import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Header() {
  const { asPath } = useRouter();
  const [currentHash, setCurrentHash] = useState(asPath.split("/").at(-1));
  console.log(currentHash);

  const navItems = [
    { href: "#", text: "Home" },
    { href: "#about_me", text: "About me" },
    { href: "#portfolio", text: "Portfolio (WIP)" },
    { href: "#work_experience", text: "Resume" },
    { href: "#contact", text: "Contact" },
  ];

  useEffect(() => {
    window.addEventListener("hashchange", ({ newURL }) => {
      let { hash } = new URL(newURL);
      hash = hash || "#";
      setCurrentHash(hash);
    });
  }, []);

  return (
    <header
      className={classNames(["d-flex", "align-items-center", styles.header])}
    >
      <div
        className={classNames([
          "container",
          "d-flex",
          "justify-content-between",
          "align-items-center",
        ])}
      >
        <a href="#" className={"font-mono"}>
          <span style={{ letterSpacing: "-.25rem" }}>:.:</span> manuelvega
          <span style={{ color: "var(--color-primary)" }}>.dev</span>
        </a>
        <nav className={classNames(["d-none", "d-lg-block"])}>
          <ul
            className={classNames([
              "d-flex",
              "align-items-center",
              "gap-4",
              "opacity-75",
              "text-decoration-underline",
              "mb-0",
            ])}
            style={{ listStyle: "none" }}
          >
            {navItems.map(({ href, text }, index) => {
              return (
                <li key={index}>
                  <a
                    href={href}
                    className={classNames({ active: href === currentHash })}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href="/"
          className={classNames([
            "border-1",
            "border",
            "border-opacity-50",
            "border-white",
            "d-inline-flex",
            "py-2",
            "px-3",
            "rounded-3",
            "gap-2",
          ])}
        >
          <i className="bi bi-download" />
          Download CV
        </Link>
      </div>
    </header>
  );
}
