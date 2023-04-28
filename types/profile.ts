export interface Profile {
  name: string;
  "photo-url": string;
  headline: string;
  birthplace: string;
  email: string;
  birthday: string;
  about: string;
  links: Link[];
  "work-experience": WorkExperience[];
  education: Education[];
}

export interface Education {
  school: string;
  degree: string;
  "field-of-study": string;
  "start-date": string;
  "end-date": string;
  grade: string;
  activities: string;
  description: string;
  skills: any[];
}

export interface Link {
  name: string;
  url: string;
}

export interface WorkExperience {
  title: string;
  "employment-type": string;
  "company-name": string;
  location: string;
  "location-type": string;
  "start-date": string;
  "end-date": string;
  industry: string;
  description: string;
  "profile-headline": string;
  skills: string[];
}
