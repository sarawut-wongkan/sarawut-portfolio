import { motion } from "framer-motion";

const details = [
  {
    title: "Education",
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
    value: "Software Development",
  },
];


function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">


        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold">
            About Me
          </h2>


          <p className="mt-6 leading-8 text-zinc-300">

            I am Sarawut Wongkan, a fourth-year
            Computer Engineering student at
            Kasetsart University, Chalermphrakiat
            Sakon Nakhon Province Campus.

          </p>


          <p className="mt-4 leading-8 text-zinc-300">

            I am interested in software development,
            mobile applications, backend systems,
            and IoT technologies. I enjoy learning
            new technologies and creating solutions
            that solve real-world problems.

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
              className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
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