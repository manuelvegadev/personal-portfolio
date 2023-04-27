import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { GetServerSideProps } from "next";
import path from "path";
import { promises as fs } from "fs";
import classNames from "classnames";
import Link from "next/link";
import { Hero } from "@/modules/hero/hero";
import { Experience } from "@/modules/experience/experience";

const fontSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const fontMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home({ data }) {
  return (
    <main className={classNames([fontSans.className])}>
      <header
        style={{
          backgroundColor: "#27282c",
          position: "fixed",
          top: "0",
          left: 0,
          right: 0,
          height: "4rem",
          display: "flex",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div
          className={classNames([
            "container",
            "d-flex",
            "justify-content-between",
            "align-items-center",
          ])}
        >
          <a href="#" className={fontMono.className}>
            <span style={{ letterSpacing: "-.25rem" }}>:.:</span> manuelvega
            <span style={{ color: "#8473ff" }}>.dev</span>
          </a>
          <nav>
            <ul
              className={classNames([
                "d-flex",
                "align-items-center",
                "gap-4",
                "opacity-75",
                "text-decoration-underline",
              ])}
              role={"navigation"}
              style={{ listStyle: "none" }}
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about_me">About me</a>
              </li>
              <li>
                <a className={classNames(["opacity-50"])} href="#portfolio">
                  Portfolio (WIP)
                </a>
              </li>
              <li>
                <a href="#work_experience">Resume</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
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
            <i className="bi bi-download"></i>Download CV
          </Link>
        </div>
      </header>
      <Hero data={data} />
      <Experience data={data} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(
    jsonDirectory + "/profile.json",
    "utf8"
  );
  const data = JSON.parse(fileContents);

  return { props: { data } };
};
