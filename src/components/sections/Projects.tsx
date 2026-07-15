import { motion } from "framer-motion";

import {
  SiFlutter,
  SiFirebase,
  SiNodedotjs,
  SiArduino,
  SiPython,
  SiTensorflow,
  SiReact,
} from "react-icons/si";


const projects = [
  {
    title: "BUDGETMATE",
    status: "Final Project",
    description:
      "A personal finance management application that helps users record income, expenses, manage budgets, and track saving goals.",
    technologies: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
    ],
    github: "#",
  },


  {
    title: "Black Soldier Fly Larvae Waste Management Research",
    status: "Research Project",
    description:
      "A research project studying optimal waste layer thickness for Black Soldier Fly Larvae growth and organic waste reduction.",
    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
      },
    ],
    github: "#",
  },


  {
    title: "IoT Monitoring System",
    status: "Embedded System",
    description:
      "An IoT monitoring system using sensors to collect environmental data and display real-time information.",
    technologies: [
      {
        name: "Arduino",
        icon: SiArduino,
      },
      {
        name: "React",
        icon: SiReact,
      },
    ],
    github: "#",
  },
];


function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20">

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
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-2 hover:border-green-500"
            >


              {/* Status */}

              <p className="text-sm text-green-500">
                {project.status}
              </p>



              {/* Title */}

              <h3 className="mt-3 text-xl font-semibold">
                {project.title}
              </h3>



              {/* Description */}

              <p className="mt-4 leading-7 text-zinc-300">
                {project.description}
              </p>



              {/* Technology */}

              <div className="mt-6 flex flex-wrap gap-3">

                {project.technologies.map((tech) => {

                  const Icon = tech.icon;


                  return (

                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm"
                    >

                      <Icon className="text-green-500" />

                      {tech.name}

                    </div>

                  );

                })}


              </div>



              {/* Button */}

              <div className="mt-6">

                <a
                  href={project.github}
                  className="inline-block rounded-lg border border-zinc-700 px-4 py-2 text-sm transition hover:border-green-500 hover:text-green-500"
                >
                  GitHub
                </a>

              </div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}


export default Projects;