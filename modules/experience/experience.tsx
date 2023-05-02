import classNames from "classnames";
import { Fragment } from "react";
import { Profile } from "@/types";
import { ExperienceCard } from "@/modules/experience/sub-components";
import { getExperienceDuration } from "@/modules/experience/utils";
import styles from "./experience.module.scss";

export function Experience({ data }: { data: Profile }) {
  return (
    <div className={"pt-5"}>
      <div className={"container"}>
        <section className="row">
          <div className={classNames(["col-12", "mb-5"])}>
            <h2
              className={classNames([
                "fs-1",
                "fw-light",
                "my-0",
                "my-sm-5",
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
          <div className={classNames([styles.experiences, "col"])}>
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
                  <ExperienceCard experience={experience} />
                </Fragment>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
