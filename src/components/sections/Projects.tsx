import { motion } from "framer-motion";

const projects = [
  {
    title: "BUDGETMATE",
    description:
      "A personal finance management application designed to help users track income, expenses, budgets, and saving goals.",
    technologies: [
      "Flutter",
      "Firebase",
      "Node.js",
    ],
  },
  {
    title: "Black Soldier Fly Larvae Waste Management Research",
    description:
      "A research project focused on optimizing organic waste layer thickness for Black Soldier Fly Larvae growth and waste reduction.",
    technologies: [
      "Research",
      "Data Analysis",
      "Environmental Technology",
    ],
  },
  {
    title: "IoT Monitoring System",
    description:
      "An IoT-based monitoring system using sensors to collect environmental data and display real-time information.",
    technologies: [
      "Arduino",
      "DHT22",
      "OLED Display",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Projects
        </motion.h2>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-2"
            >

              <h3 className="text-xl font-semibold text-green-500">
                {project.title}
              </h3>


              <p className="mt-4 leading-7 text-zinc-300">
                {project.description}
              </p>


              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-zinc-800 px-3 py-1 text-sm text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;