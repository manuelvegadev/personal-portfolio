import { formatDate } from "@/utils";
import { WorkExperience } from "@/types";

export function getExperienceDuration(experience: WorkExperience) {
  return (
    formatDate(experience["start-date"]) +
    " - " +
    (experience["end-date"] ? formatDate(experience["end-date"]) : "Present")
  );
}
