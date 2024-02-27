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

interface Technology {
  name: string;
  img?: string;
}

export const technologies: Technology[] = [
  {
    name: "React",
    img: ReactLogo,
  },
  {
    name: "ReactNative",
    img: ReactNativeLogo,
  },
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
    name: "Nx",
    img: NxLogo,
  },
  {
    name: "Kafka",
    img: KafkaLogo,
  },

  {
    name: "Fastlane",
    img: FastlaneLogo,
  },
  {
    name: "Docker",
    img: DockerLogo,
  },
  {
    name: "Postgresql",
    img: PostgresqlLogo,
  },
  {
    name: "Jenkins",
    img: JenkinsLogo,
  },
];
