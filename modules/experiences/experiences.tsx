import classNames from "classnames";
import { Fragment } from "react";
import { Profile } from "@/types";
import { ExperienceCard } from "@/modules/experiences/sub-components";
import { getExperienceDuration } from "@/modules/experiences/utils";
import styles from "./experiences.module.scss";

export function Experiences({ data }: { data: Profile }) {
  return (
    <div className={"py-5"}>
      <div className={"container"}>
        <section className="row">
          <div className={classNames(["col-12", "mb-4", "mb-sm-5"])}>
            <h2
              className={classNames([
                "fs-1",
                "fw-light",
                "mt-0",
                "mt-sm-5",
                "font-mono",
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

          <div className="col mb-5">
            <p>
              Welcome to my Work Experience section, where you can see some of
              the projects I&apos;ve worked on as a web developer. Each project
              has challenged me to develop my skills with different technologies
              and tools. Take a look at my work experience to learn more about
              my skills and previous projects. Let&apos;s collaborate on your
              next web project!
            </p>
          </div>

          <div
            className={classNames([
              styles.experiences,
              "col",
              "col-12",
              "my-4",
              "my-sm-0",
            ])}
          >
            {data["work-experience"].map((experience, index, array) => {
              const isLast = index === array.length - 1;
              const isFirst = index === 0;

              return (
                <Fragment key={index}>
                  <div
                    className={classNames([
                      styles["we-mark"],
                      { [styles["we-mark--last"]]: isLast },
                      { [styles["we-mark--first"]]: isFirst },
                    ])}
                  >
                    <span className={styles["we-mark__dot"]} />
                    <span
                      className={classNames([
                        "opacity-75",
                        "d-none",
                        "d-md-inline-block",
                      ])}
                    >
                      {getExperienceDuration(experience)}
                    </span>
                  </div>
                  <ExperienceCard
                    experience={experience}
                    isLast={isLast}
                    isFirst={isFirst}
                  />
                </Fragment>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
