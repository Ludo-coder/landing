import { FaLinkedin } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import Logo from "@/public/images/adonis.png";

export default function ProjectSection() {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold sm:text-5xl">
        Mes derniers projets
      </h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        <ProjectCard
          href={""}
          key={"title"}
          title={"title"}
          description={"description"}
          dates={"dates"}
          tags={["technologies"]}
          image={Logo}
          links={[
            {
              icon: <FaLinkedin />,
              type: "linkedin",
              href: "https://www.linkedin.com/in/ludovic-hund-1b2194248/",
            },
          ]}
        />
      </div>
    </section>
  );
}
