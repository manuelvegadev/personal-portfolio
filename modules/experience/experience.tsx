import classNames from "classnames";
import { Fragment } from "react";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";

const fontSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
const fontMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export function Experience({ data }) {
  return (
    <div className={"pt-5"}>
      <div className={"container"}>
        <section className="row">
          <div className={classNames(["col-12", "mb-5"])}>
            <h2
              className={classNames([
                "fs-1",
                "fw-light",
                "my-5",
                fontMono.className,
              ])}
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
                      border: "2px solid #8473ff",
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
    </div>
  );
}
