import { Fragment, useEffect, useState } from "react";
import classNames from "classnames";
import { WorkExperience } from "@/types";
import { getExperienceDuration } from "@/modules/experiences/utils";
import { ExperienceCard } from "@/modules/experiences/sub-components";
import styles from "@/modules/experiences/experiences.module.scss";

interface IExperienceProps {
  experiences: WorkExperience[];
  index: number;
}

export function Experience({ experiences, index }: IExperienceProps) {
  const [experienceDuration, setExperienceDuration] = useState(
    "Month YEAR - Month YEAR"
  );

  const experience = experiences[index];
  const isLast = index === experiences.length - 1;
  const isFirst = index === 0;

  useEffect(() => {
    setExperienceDuration(getExperienceDuration(experience));
  }, [experience]);

  return (
    <Fragment>
      <div
        className={classNames([
          styles["we-mark"],
          { [styles["we-mark--last"]]: isLast },
          { [styles["we-mark--first"]]: isFirst },
        ])}
      >
        <span className={styles["we-mark__dot"]} />
        <span
          className={classNames(["opacity-75", "d-none", "d-md-inline-block"])}
        >
          {experienceDuration}
        </span>
      </div>
      <ExperienceCard
        experience={experience}
        isLast={isLast}
        isFirst={isFirst}
        experienceDuration={experienceDuration}
      />
    </Fragment>
  );
}
