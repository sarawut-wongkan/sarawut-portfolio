import { motion } from "framer-motion";

const projects = [
  {
    title: "BUDGETMATE",
    description:
      "Developed a personal finance management application that enables users to efficiently track income and expenses while providing comprehensive financial insights through daily, monthly, and yearly analytics. The application includes budget planning and financial monitoring features, with Firebase used for data storage and real-time synchronization, helping users manage their finances more effectively and make informed financial decisions.",
    technologies: [
      "Flutter",
      "Firebase",
      "Node.js",
    ],
  },
  {
    title: "KU NextGen X Ai ",
    description:
      "Developed an AI-powered web application that transforms PDF documents into concise and easy-to-understand study notes using AI-driven text summarization. The application integrates AI services to generate accurate summaries from uploaded academic materials, enabling users to quickly grasp key concepts while significantly reducing the time required to read and review lengthy documents, ultimately improving learning efficiency.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "AI API",
    ],
  },
  {
    title: "GradieKU",
    description:
      "Developed a web application that enables students to verify completed courses and accumulated credits based on the official university curriculum. The application features a responsive user interface and integrates backend services with MySQL to manage academic records efficiently. By providing an organized view of course progress and credit requirements, it helps students plan their studies more effectively and track their progress toward graduation.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "PHP",
      "MySQL",
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