interface Project {
  name: string;
  company: string;
  teamsize: number;
  time: string;
  description: string;
  role: string;
  technologies: string;
  achievements: string;
}

export const projects: Project[] = [
  {
    name: "Admin Nextgen",
    company: "Nano Technologies",
    teamsize: 3,
    time: "July 2023 - November 2023",
    description:
      "An internal web-based administration tool enhances operational efficiency and system performance. Furthermore, it expedites project configuration and deployment processes for new enterprises.",
    role: "Senior Front-end Engineer",
    technologies:
      "React, TypeScript, Sentry, AWS S3, Keycloak, GraphQL, Tailwind, Vite, Module Federation, Nx.",
    achievements:
      "Developed a micro front-end system using Nx and Webpack Module Federation, boosting productivity across multiple departments.",
  },
  {
    name: "Open Vui",
    company: "Nano Technologies",
    teamsize: 5,
    time: "February 2022 - June 2023",
    description:
      "The embedded web app helps vendors integrate Vuiapp easily, ensuring the smoothest user experience possible. Additionally, it enables vendors to white-label their brand effortlessly.",
    role: "Senior Front-end Engineer",
    technologies:
      "React, TypeScript, Sentry, AWS S3, Keycloak, GraphQL, Tailwind, Vite.",
    achievements:
      "Achieve native app-like UX for a web app in a brief timeframe.",
  },
  {
    name: "Vui App",
    company: "Nano Technologies",
    teamsize: 12,
    time: "February 2022 - July 2023",
    description:
      "The Earned Wage Access project allows employees to access their earned wages ahead of the scheduled payday, providing financial flexibility and addressing short-term cash flow needs directly. This solution ensures seamless delivery of this benefit to employees while adhering to wage regulations.",
    role: "Senior Software Engineer/Scrum Master",
    technologies:
      "React Native, TypeScript, Sentry, Fastlane, Segment, Keycloak, GraphQL, Lottie, RepackJs.",
    achievements:
      "Implemented Fastlane for React Native CI/CD, reducing release cycles for the mobile team by 27 hours, with the additional feature of playing music during builds.",
  },
  {
    name: "Integration Gate",
    company: "Nano Technologies",
    teamsize: 6,
    time: "May 2021 - February 2022",
    description:
      "Integrated the client's HRM system into the Vuiapp platform, while also overseeing the development of their portal website.",
    role: "Software Engineer",
    technologies:
      "React Native, TypeScript, Sentry, Keycloak, GraphQL, Kotlin.",
    achievements:
      "Created an Excel ETL service with antd and Kotlin, cutting integration time from 2 days to 2 hours.",
  },
  {
    name: "Produce Diary",
    company: "Smartlife",
    teamsize: 4,
    time: "March 2020 - April 2021",
    description:
      "The Produce Diary System empowers food produce companies by digitizing their operations and enhancing product traceability. Through detailed records and transparency features, it enables companies to demonstrate the quality and authenticity of their products to consumers.",
    role: "Back-end Engineer/Project Manager",
    technologies:
      "React, React Native, NestJS, Redux, TypeScript, Sentry, PostgreSQL, Docker.",
    achievements:
      "Handle all initial project stages, from designing and building core code, to project development, and ultimately, project marketing and sales.",
  },
  {
    name: "Fish Diary",
    company: "Smartlife",
    teamsize: 4,
    time: "August 2019 - March 2020",
    description:
      "The Fish Diary System assists fishermen and fishing ships in documenting their fishing routes and digitizing their activities. Additionally, it supports their company in ensuring product traceability to demonstrate the quality of their products.",
    role: "Fullstack Software Engineer",
    technologies:
      "React, React Native, NestJS, Redux, TypeScript, Sentry, PostgreSQL, Realm, Kafka, Docker.",
    achievements:
      "Designed and maintained a custom system for synchronizing data between Realm(noSQL) and Postgres(SQL).",
  },
  {
    name: "Mobile Number Portability (MNP)",
    company: "Viettel",
    teamsize: 8,
    time: "February 2018 - July 2019",
    description:
      "With the Mobile Number Portability System, you can switch service providers easily without having to relinquish your phone number.",
    role: "Junior Software Engineer",
    technologies:
      "Primefaces, Java, Spring Boot, Hibernate, Oracle, Kafka, Jenkins.",
    achievements:
      "Implemented Jenkins to streamline deployment of 12 node servers, reducing feature deployment times by 3 hours.",
  },
  {
    name: "Electronic Invoice (EInvoice)",
    company: "Viettel",
    teamsize: 5,
    time: "February 2018 - July 2019",
    description:
      "The Electronic Invoice (EInvoice) system empowers businesses to modernize their invoicing processes, drive efficiency gains, and achieve greater accuracy and compliance in financial operations.",
    role: "Junior Software Engineer",
    technologies:
      "Primefaces, Java, Spring Boot, Hibernate, Oracle, Kafka, Jenkins.",
    achievements:
      "Delivered high-quality services consistently meeting all task deadlines.",
  },
];
