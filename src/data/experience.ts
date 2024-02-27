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
      "Implemented React Native UI/UX for the customer-facing app, which has 10K monthly active users.",
      "Built a micro front-end system with Nx and Webpack Module Federation, which served multiple departments to increase productivity.",
      "Implemented an Excel ETL service for the integration team, reducing integration time from 2 days to 2 hours.",
      "Designed, implemented, and maintained a SQL AST (Abstract Syntax Tree) parser service that helps the backend determine where to dynamically apply business logic.",
      "Worked in an Agile Scrum team of 12 members, facilitating Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
      "Integrated Fastlane for React Native CI/CD, which allowed the mobile team to shorten release cycles by 27 hours.",
    ],
  },
  {
    company: "Smart Life",
    position: "FullStack Software Engineer/Project Manager",
    time: "August 2019 - April 2021",
    works: [
      "Crafted and executed an exquisite React Native UI/UX tailored for the discerning tastes of our esteemed clientele within our customer-facing application.",
      "Architected and maintained a custom system that needed to synchronize data between NoSQL and SQL.",
      "Led an Agile Scrum team of 5 members, contributing to an 80% improvement in continuous integration and deployment (CI/CD).",
      "Mentored 2 junior engineers, increasing their productivity and improving code quality.",
    ],
  },
  {
    company: "Viettel",
    position: "Junior Software Engineer",
    time: "December 2017 - July 2019",
    works: [
      "Streamlined deployment process by implementing Jenkins, decreasing deployment times for new features by 1 hour.",
      "Implemented Apache Kafka, which avoids Oracle database write conflicts.",
    ],
  },
];
