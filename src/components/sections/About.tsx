import { motion } from "framer-motion";

const details = [
  {
    title: "Education",
    value: "Bachelor of Engineering",
  },
  {
    title: "Major",
    value: "Computer Engineering",
  },
  {
    title: "University",
    value: "Kasetsart University",
  },
  {
    title: "Campus",
    value: "Chalermphrakiat Sakon Nakhon Province Campus",
  },
  {
    title: "Focus",
    value: "Software Development, Web, Mobile, AI & IoT",
  },
];


function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-black px-6 py-24 md:px-20"
    >

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">


        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="text-green-500">
            About Me
          </p>


          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Who I Am
          </h2>



          <p className="mt-6 leading-8 text-zinc-300">

            I am Sarawut Wongkan, a fourth-year
            Computer Engineering student at
            Kasetsart University, Chalermphrakiat
            Sakon Nakhon Province Campus.

          </p>



          <p className="mt-4 leading-8 text-zinc-300">

            I have a passion for software development
            and emerging technologies. My interests
            include web applications, mobile development,
            backend systems, artificial intelligence,
            and IoT solutions.

          </p>



          <p className="mt-4 leading-8 text-zinc-300">

            I enjoy transforming ideas into practical
            applications and continuously improving my
            programming and engineering skills.

          </p>


        </motion.div>




        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-4"
        >

          {details.map((item) => (

            <div
              key={item.title}
              className="
              rounded-xl 
              border border-zinc-800
              bg-zinc-900/50
              p-5
              transition
              hover:border-green-600
              "
            >

              <p className="text-sm text-green-500">
                {item.title}
              </p>


              <p className="mt-2 text-zinc-200">
                {item.value}
              </p>


            </div>

          ))}

        </motion.div>


      </div>

    </section>
  );
}


export default About;