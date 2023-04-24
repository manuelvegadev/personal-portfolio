import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { GetServerSideProps } from "next";
import path from "path";
import { promises as fs } from "fs";
import classNames from "classnames";
import Link from "next/link";
import { Fragment } from "react";

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
        className={classNames([
          "position-absolute",
          "start-0",
          "end-0",
          "py-4",
          "container",
          "d-flex",
          "justify-content-between",
          "align-items-center",
        ])}
      >
        <Link href="/" className={fontMono.className}>
          {"//"} manuelvega<span style={{ color: "#D8E9A8" }}>.dev</span>
        </Link>
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
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#about_me">About me</Link>
            </li>
            <li>
              <Link className={classNames(["opacity-50"])} href="#portfolio">
                Portfolio (WIP)
              </Link>
            </li>
            <li>
              <Link href="#work_experience">Resume</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
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
      </header>
      <div className={"container"}>
        <section
          className={classNames([
            "row",
            "vh-100",
            "align-content-center",
            "align-items-center",
          ])}
        >
          <div className={classNames(["col", "col-5", "hhh"])}>
            <span className={classNames(["fs-5"])}>Hello, I&apos;m</span>
            <h1
              className={classNames([
                "fw-bold",
                "fst-italic",
                "my-1",
                fontMono.className,
              ])}
              style={{
                fontSize: "calc(2.75rem + 1.5vw)",
                textShadow: "0 0 10px rgba(0,0,0,.25)",
                marginLeft: "-.25rem",
              }}
            >
              {data.name.trim().replaceAll(" ", "_")}
            </h1>
            <h2
              className={classNames(["fw-semibold", "fs-3"])}
              style={{
                color: "white",
                textShadow: "0 0 10px rgba(0,0,0,.25)",
              }}
            >
              {data.headline}
            </h2>
            <p className={classNames(["fs-5", "my-4", "text-white-50"])}>
              {data.about}
            </p>

            <div className={"d-flex gap-2 w-100 fs-4"}>
              {data.links.map((link, index) => {
                return link.name && link.url ? (
                  <a
                    key={index}
                    href={link.url}
                    className={classNames([
                      "px-2",
                      "border",
                      "border-1",
                      "border-white",
                      "border-opacity-25",
                      "rounded-3",
                      "align-items-center",
                      "d-inline-flex",
                    ])}
                    style={{ aspectRatio: "1" }}
                  >
                    <i className={`bi bi-${link.name.toLowerCase()}`}></i>
                  </a>
                ) : null;
              })}
              <button
                className={classNames([
                  "d-flex",
                  "align-items-center",
                  "justify-content-center",
                  "lh-1",
                  "bg-white",
                  "text-dark",
                  "border-0",
                  "d-inline-flex",
                  "py-2",
                  "px-3",
                  "rounded-3",
                  "gap-2",
                ])}
                style={{ fontSize: ".75em", cursor: "pointer" }}
              >
                <i className="bi bi-whatsapp"></i>Contact me!
              </button>
            </div>
          </div>
          <div
            className={classNames(["col", "col-4", "offset-2", "text-center"])}
          >
            <img
              className={classNames(["rounded-circle", "w-100"])}
              src={data["photo-url"]}
              alt={"Profile picture"}
              style={{
                boxShadow: "0 0 10px rgba(0,0,0,.25)",
                aspectRatio: "1/1 !important",
              }}
            />
          </div>
        </section>
        <section className="row">
          <div className={classNames(["col-12", "mb-5"])}>
            <h2
              className={classNames(["fs-1", "fw-light", fontMono.className])}
            >
              👨‍💻{" "}
              <a
                href={"#work_experience"}
                id="work_experience"
                className={"fst-italic"}
              >
                #Work_Experience
              </a>
            </h2>
          </div>
          <div
            className={classNames(["col"])}
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "2rem",
            }}
          >
            {data["work-experience"].map((experience, index, array) => {
              return (
                <Fragment key={index}>
                  <div
                    className={classNames([
                      "we-mark",
                      { last: index === array.length - 1 },
                    ])}
                  >
                    <span className="dot" />
                    <span className={classNames(["opacity-75"])}>
                      {experience["start-date"]}
                      {" - "}
                      {experience["end-date"] || "Present"}
                    </span>
                  </div>
                  <div
                    className={classNames([
                      "p-4",
                      "rounded-3",
                      "d-flex",
                      "gap-3",
                      "flex-column",
                    ])}
                    style={{
                      backgroundColor: "#252625",
                      boxShadow: "0 0 10px rgba(0,0,0,.25)",
                    }}
                  >
                    <h3 className={classNames(["fs-4", "fw-bold"])}>
                      {experience.title}
                    </h3>
                    <span
                      className={classNames([
                        "d-block",
                        "fs-5",
                        "text-white-50",
                      ])}
                    >
                      {experience["company-name"]}
                    </span>
                    {experience.description ? (
                      <p className={classNames(["fs-6", "m-0"])}>
                        {experience.description}
                      </p>
                    ) : null}
                    {experience.skills ? (
                      <div className={"d-flex gap-3 flex-wrap"}>
                        {experience.skills.map((experience, index) => {
                          return <button key={index}>{experience}</button>;
                        })}
                      </div>
                    ) : null}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </section>
      </div>
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
