import TypeScriptLogo from "../assets/typescript.svg";
import JavaScriptLogo from "../assets/javascript.svg";
import ReactLogo from "../assets/react.svg";
import KotlinLogo from "../assets/kotlin.svg";
import KafkaLogo from "../assets/kafka.svg";
import GraphqlLogo from "../assets/graphql.svg";
import FastlaneLogo from "../assets/fastlane.svg";
import ReactNativeLogo from "../assets/react-native.svg";
import NestjsLogo from "../assets/nestjs.svg";
import NodejsLogo from "../assets/nodejs.svg";
import DockerLogo from "../assets/docker.svg";
import PostgresqlLogo from "../assets/postgresql.svg";
import JenkinsLogo from "../assets/jenkins.svg";
import NxLogo from "../assets/nx.svg";
import JavaLogo from "../assets/java.svg";
import ViteLogo from "../assets/vite.svg";
import WebpackLogo from "../assets/webpack.svg";
import TailwindLogo from "../assets/tailwind.svg";
import CicleciLogo from "../assets/cicleci.svg";
import LambdaLogo from "../assets/lambda.svg";
import PuppeteerLogo from "../assets/puppeteer.svg";
import ExcelLogo from "../assets/excel.svg";

export interface Technology {
  name: string;
  img?: string;
}

export const languages: Technology[] = [
  {
    name: "TypeScript",
    img: TypeScriptLogo,
  },
  {
    name: "JavaScript",
    img: JavaScriptLogo,
  },
  {
    name: "Kotlin",
    img: KotlinLogo,
  },
  {
    name: "Java",
    img: JavaLogo,
  },
];

export const backend: Technology[] = [
  {
    name: "Nodejs",
    img: NodejsLogo,
  },
  {
    name: "Nestjs",
    img: NestjsLogo,
  },
  {
    name: "Graphql",
    img: GraphqlLogo,
  },
  {
    name: "Lambda",
    img: LambdaLogo,
  },
  {
    name: "Postgresql",
    img: PostgresqlLogo,
  },
];

export const mobile: Technology[] = [
  {
    name: "React Native",
    img: ReactNativeLogo,
  },
  {
    name: "Fastlane",
    img: FastlaneLogo,
  },
];

export const web: Technology[] = [
  {
    name: "React",
    img: ReactLogo,
  },
  {
    name: "Tailwind",
    img: TailwindLogo,
  },
  {
    name: "Vite",
    img: ViteLogo,
  },
  {
    name: "Webpack",
    img: WebpackLogo,
  },
  {
    name: "Nx",
    img: NxLogo,
  },
  {
    name: "Puppeteer",
    img: PuppeteerLogo,
  },
];

export const others: Technology[] = [
  {
    name: "Docker",
    img: DockerLogo,
  },
  {
    name: "Kafka",
    img: KafkaLogo,
  },
  {
    name: "CicleCI",
    img: CicleciLogo,
  },
  {
    name: "Jenkins",
    img: JenkinsLogo,
  },
  {
    name: "Excel",
    img: ExcelLogo,
  },
];
