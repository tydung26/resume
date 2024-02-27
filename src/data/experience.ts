interface Experience {
  company: string;
  position: string;
  time: string;
  works: string[];
}

export const experiences: Experience[] = [
  {
    company: "Nano Technologies - VuiApp",
    position: "Senior Software Engineer/Scrum Master",
    time: "May 2021 - November 2023",
    works: [
      "Implemented React Native UI for the customer-facing app that has 10K monthly active user.",
      "Build a micro front-end system with Nx which served multiple departments to increase productivity.",
      "Implemented Excel ETL system for integration team, reducing integrate time from 2 days to 2 hours.",
      "Worked in an agile scrum team of 12 members, hosting team planning and prioritizing tasks for development team's member.",
      "Intergrated Fastlane for React Native CD/CD, which allowed the mobile team to quicken release cycles by 27 hours.",
    ],
  },
  {
    company: "Smart Life",
    position: "FullStack Software Engineer/Project Manager",
    time: "August 2019 - April 2021",
    works: [
      "Designed and implemented React Native UI for the customer-facing app.",
      "Architected and maintain a custom system that need to be synchronized data between NoSQL and SQL.",
      "Led an agile scrum team of 5 members, contributing to 80% continuous improvement and deployment (CICD).",
      "Mentored 2 junior engineers, increasing their productivity and improving code quality.",
    ],
  },
  {
    company: "Viettel",
    position: "Junior Software Engineer",
    time: "December 2017 - July 2019",
    works: [
      "Streamlined deployment process by implementing Jenkins, decreasing deployment times for new features by 1 hour.",
      "Implemented Apache Kafka, which avoid oracle database write conflict.",
    ],
  },
];
