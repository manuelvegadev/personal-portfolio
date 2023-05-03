import classNames from "classnames";
import { Tag } from "@/components";
import { WorkExperience } from "@/types";
import { getExperienceDuration } from "@/modules/experiences/utils";
import styles from "./experience-card.module.scss";

interface IExperienceCardProps {
  experience: WorkExperience;
  isLast?: boolean;
  isFirst?: boolean;
}

export function ExperienceCard({
  experience,
  isLast,
  isFirst,
}: IExperienceCardProps) {
  return (
    <div
      className={classNames([
        styles["experience-card"],
        { [styles["experience-card--last"]]: isLast },
        { [styles["experience-card--first"]]: isFirst },
        "p-4",
        "p-sm-5",
        "rounded-3",
        "d-flex",
        "gap-4",
        "flex-column",
      ])}
      style={{
        backgroundColor: "#252625",
        boxShadow: "0 0 10px rgba(0,0,0,.25)",
        border: "1px solid var(--color-primary)",
      }}
    >
      {isFirst ? <span className={styles["future-emoji"]}>🚀</span> : null}
      {isLast ? <span className={styles["beginnings-emoji"]}>👶</span> : null}
      <span className={classNames(["fs-5", "fw-bold", "font-mono"])}>
        {experience.title}
        <span
          className={classNames(["text-white-50", "fw-normal", "font-sans"])}
        >
          {" - "}
          {experience["company-name"]}
        </span>
      </span>
      <span
        className={classNames(["opacity-75", "d-inline-block", "d-md-none"])}
      >
        {getExperienceDuration(experience)}
      </span>
      {experience.description ? (
        <p className={classNames(["fs-6", "m-0", "opacity-75"])}>
          {experience.description}
        </p>
      ) : null}
      {experience.skills ? (
        <div
          className={"d-flex flex-wrap"}
          style={{ rowGap: ".5rem", columnGap: ".25rem" }}
        >
          {experience.skills.map((experience, index) => (
            <Tag
              key={index}
              hoverColor={experience
                .trim()
                .replaceAll(" ", "")
                .replaceAll(".", "")
                .toLowerCase()}
            >
              {experience}
            </Tag>
          ))}
        </div>
      ) : null}
    </div>
  );
}
