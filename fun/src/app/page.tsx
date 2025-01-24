import Single_Project_Loop from "../../components/Project/loop_project";
import projects from "./data";

export default function Home() {
  return (
    <section id="last-projects" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">لیست پروژه ها</h2>
        <div className="grid grid-cols-1 gap-y-3">
            {projects().map((project) => (
            <Single_Project_Loop key={project.id} Project={project} />
            ))}
        </div>
    </section>
  );
}
