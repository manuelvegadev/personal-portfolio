import classNames from "classnames";
import { Tag } from "@/components";
import { WorkExperience } from "@/types";

interface IExperienceCardProps {
  experience: WorkExperience;
}

export function ExperienceCard({ experience }: IExperienceCardProps) {
  return (
    <div
      className={classNames([
        "p-5",
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
      <span className={classNames(["fs-5", "fw-bold", "font-mono"])}>
        {experience.title}
        <span
          className={classNames(["text-white-50", "fw-normal", "font-sans"])}
        >
          {" - "}
          {experience["company-name"]}
        </span>
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
