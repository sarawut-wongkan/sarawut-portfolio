import { motion } from "framer-motion";

import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiArduino,
  SiFigma,
} from "react-icons/si";

import {
  FaCss3Alt,
  FaCode,
} from "react-icons/fa";


const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "PHP", icon: SiPhp },
      { name: "C/C++", icon: SiCplusplus },
    ],
  },

  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Arduino", icon: SiArduino },
      { name: "Figma", icon: SiFigma },
    ],
  },
];


function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Technical Skills
        </motion.h2>


        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {skillGroups.map((group, index) => (

            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
            >

              <h3 className="text-xl font-semibold text-green-500">
                {group.title}
              </h3>


              <div className="mt-5 grid grid-cols-2 gap-4">

                {group.skills.map((skill) => {

                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg bg-zinc-800 p-3 transition hover:bg-zinc-700"
                    >

                      <Icon className="text-2xl text-green-500" />

                      <span className="text-zinc-200">
                        {skill.name}
                      </span>

                    </div>
                  );

                })}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;