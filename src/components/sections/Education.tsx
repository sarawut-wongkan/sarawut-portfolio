import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";


function Education() {
  return (
    <section
      id="education"
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
          Education
        </motion.h2>



        {/* ปริญญาตรี */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
        >

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-600/20">

              <FaGraduationCap className="text-3xl text-green-500" />

            </div>


            <div>

              <p className="text-green-500">
                2022 - Present
              </p>


              <h3 className="mt-2 text-2xl font-semibold">
                Bachelor's Degree
              </h3>


              <p className="mt-4 text-zinc-400">
                Kasetsart University
                <br />
                Chalermphrakiat Sakon Nakhon Province Campus
              </p>

            </div>

          </div>



          <div className="mt-8 grid gap-4 md:grid-cols-3">


            <div className="rounded-lg bg-zinc-800 p-4">

              <p className="text-sm text-green-500">
                Faculty
              </p>

              <p className="mt-2">
                Science and Engineering
              </p>

            </div>



            <div className="rounded-lg bg-zinc-800 p-4">

              <p className="text-sm text-green-500">
                Major
              </p>

              <p className="mt-2">
                Computer Engineering
              </p>

            </div>



            <div className="rounded-lg bg-zinc-800 p-4">

              <p className="text-sm text-green-500">
                Level
              </p>

              <p className="mt-2">
                4th Year Student
              </p>

            </div>
            


          </div>


        </motion.div>





        {/* ปวส */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6"
        >


          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-600/20">

              <FaGraduationCap className="text-3xl text-green-500" />

            </div>


            <div>

              <p className="text-green-500">
                2021 - 2023
              </p>


              <h3 className="mt-2 text-2xl font-semibold">
                Associate's Degree
              </h3>


              <p className="mt-4 text-zinc-400">
                Sakonnakhon Technical College
              </p>


            </div>


          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">


            <div className="rounded-lg bg-zinc-800 p-4">

              <p className="text-sm text-green-500">
                Major
              </p>

              <p className="mt-2">
                Information Technology
              </p>

            </div>
            


          </div>
          


        </motion.div>


      </div>

    </section>
  );
}


export default Education;