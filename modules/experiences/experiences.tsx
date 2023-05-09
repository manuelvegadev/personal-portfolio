import classNames from "classnames";
import { Profile } from "@/types";
import styles from "./experiences.module.scss";
import { Experience } from "@/modules/experiences/sub-components/experience/experience";

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
            {data["work-experience"].map((experience, index) => (
              <Experience
                experiences={data["work-experience"]}
                index={index}
                key={index}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
