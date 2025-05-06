import { ProjectCard } from "./ProjectCard";
import KinesioImage from "@/public/images/site_mailys.png";
import ManieImage from "@/public/images/manie.png";
import CibImage from "@/public/images/cib_hmw.png";
import GymImage from "@/public/images/gym_training.png";
import QuickstartImage from "@/public/images/npm_next-quickstart.png";
import TradingImage from "@/public/images/trading.png";

const projects = [
  {
    href: "https://www.kinesiologue-bardos.fr/",
    title: "Mailys Locqueneux Kinésiologue",
    description:
      "Refonte d'un site vitrine en landing page, pour une Kinésiologue à Bardos.",
    image: KinesioImage,
    tags: ["Next", "React", "SCSS", "Typescript", "DevOps", "Github"],
  },
  {
    href: "https://manie-event.fr/",
    title: "Manie Event",
    description:
      "Développement backend from scratch d'une plateforme d'organisation d'évènements.",
    image: ManieImage,
    tags: ["Adonis", "Typescript", "PostgreSQL", "DevOps", "Github"],
  },
  {
    href: "https://www.npmjs.com/package/create-next-quickstart",
    title: "Commande Quickstart",
    description:
      "Commande npx publique et template pour setup un projet Next.js avec les librairies phares rapidement.",
    image: QuickstartImage,
    tags: ["Next", "React", "Typescript", "npm", "Github"],
  },
  {
    href: "",
    title: "Projets start-up Trading",
    description:
      "Développement d'applications web et mobiles dans le domaine du trading.",
    image: TradingImage,
    tags: ["React", "React Native", "Typescript", "Github"],
  },
  {
    href: "https://www.gymtraining.fr/",
    title: "Gym Training",
    description:
      "Développement Fullstack d'une plateforme pour renseigner ses séances de musculation et voir son historique.",
    image: GymImage,
    tags: ["Next", "React", "PostgreSQL", "Typescript", "Github"],
  },
  {
    href: "https://www.symotronic.com/",
    title: "Projets CIB Ingenierie/Symotronic",
    description: "Développements d'apllications web dans le domaine monétique.",
    image: CibImage,
    tags: ["Next", "React", "Typescript", "DevOps", "GitLab"],
  },
];

export default function ProjectSection() {
  return (
    <section className="mb-20">
      <h2 className="text-center text-4xl font-bold sm:text-5xl mb-10">
        Mes derniers projets
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-[1000px] mx-auto px-2 justify-items-center">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            href={item.href}
            title={item.title}
            description={item.description}
            image={item.image}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
}
