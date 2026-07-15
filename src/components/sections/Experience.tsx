import { motion } from "framer-motion";


const experiences = [
  {
    year: "2025 - Present",
    role: "Final Project Developer",
    organization: "BUDGETMATE Application",
    description:
      "Developing a personal finance management application using Flutter and Firebase with features for expense tracking, budgeting, and saving goals.",
  },
  
  {
    year: "2025",
    role: "Vice President",
    organization: "Student Organization, Kasetsart University",
    description:
      "Responsible for coordinating student activities, supporting team management, and working with students to organize university projects and events.",
  },

  {
    year: "2024",
    role: "Computer Engineering Projects",
    organization: "Kasetsart University",
    description:
      "Worked on software development, IoT systems, embedded programming, and hardware integration projects.",
  },

];


function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 py-20"
    >

      <div className="mx-auto max-w-7xl">


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Experience
        </motion.h2>



        <div className="relative mt-10 border-l border-zinc-800 pl-8">


          {experiences.map((item, index) => (

            <motion.div
              key={item.role}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="relative mb-10"
            >


              {/* Timeline Dot */}

              <div className="absolute -left-[42px] top-2 h-5 w-5 rounded-full border-4 border-zinc-950 bg-green-500" />



              <p className="text-sm text-green-500">
                {item.year}
              </p>



              <h3 className="mt-2 text-xl font-semibold">
                {item.role}
              </h3>



              <p className="mt-1 text-zinc-400">
                {item.organization}
              </p>



              <p className="mt-4 max-w-3xl leading-7 text-zinc-300">
                {item.description}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}


export default Experience;