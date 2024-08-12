import { useNavigate } from "react-router-dom";
import { ScrollArea, Separator } from "@/components";
import { ROUTES } from "@/constants/routes";

const PROJECTS = [
  {
    name: "L2 Teleport Calculator",
    route: ROUTES.PROJECT_TELEPORT,
    image: "/src/assets/gatekeeper.jpg",
  },
];

export const Projects = () => {
  const navigate = useNavigate();

  return (
    <ScrollArea className="h-[calc(100vh-100px)] w-full">
      <main className="p-8">
        <h2 className="text-center font-semibold sm:text-left">Projects</h2>
        <Separator className="mb-3 mt-2" />

        <div className="flex flex-col flex-wrap items-center gap-3 sm:flex-row sm:items-start">
          {PROJECTS.map((project) => (
            <div
              className="relative h-[200px] w-[200px] cursor-pointer overflow-hidden rounded-lg border"
              onClick={() => navigate(project.route)}
              key={project.name}
            >
              <img src={project.image} alt={project.name} />

              <p className="absolute bottom-0 w-full bg-white/70 text-center font-semibold">
                {project.name}
              </p>
            </div>
          ))}
        </div>
      </main>
    </ScrollArea>
  );
};
