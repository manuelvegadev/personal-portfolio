import classNames from "classnames";
import { Fragment } from "react";
import { Profile } from "@/types";
import { ExperienceCard } from "@/modules/experience/sub-components";
import { formatDate } from "@/utils";

export function Experience({ data }: { data: Profile }) {
  return (
    <div className={"pt-5"}>
      <div className={"container"}>
        <section className="row">
          <div className={classNames(["col-12", "mb-5"])}>
            <h2
              className={classNames(["fs-1", "fw-light", "my-5", "font-mono"])}
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
                      {formatDate(experience["start-date"])}
                      {" - "}
                      {experience["end-date"]
                        ? formatDate(experience["end-date"])
                        : "Present"}
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
