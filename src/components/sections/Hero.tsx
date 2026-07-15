import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-32 md:px-20">

      {/* Background Glow */}
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />


      <div className="relative mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div className="flex flex-col justify-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-lg text-green-500"
          >
            Hello, I'm
          </motion.p>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-bold tracking-tight md:text-7xl"
          >
            SARAWUT
            <br />

            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              WONGKAN
            </span>

          </motion.h1>


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-2xl text-zinc-400"
          >
            Computer Engineering Student
          </motion.h2>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300"
          >

            <p>
              I am a fourth-year Computer Engineering student at
              Kasetsart University, Chalermphrakiat Sakon Nakhon Province Campus.
            </p>


            <p className="mt-4">
              I am passionate about Software Development,
              Web, Mobile, AI, and IoT applications.
              I enjoy building technology solutions that solve real-world problems.
            </p>

          </motion.div>



          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >

            <a
              href="#projects"
              className="rounded-lg bg-green-700 px-6 py-3 font-medium transition hover:bg-green-600"
            >
              View Projects
            </a>



            <a
              href="/Resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-700 px-6 py-3 font-medium transition hover:bg-green-600"
            >
              Resume
            </a>



            <a
              href="https://github.com/sarawut-wongkan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-700 px-6 py-3 font-medium transition hover:bg-green-600"
            >
              GitHub
            </a>


          </motion.div>

        </div>



        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >

          <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-green-600 shadow-lg shadow-green-600/30 md:h-96 md:w-96">

            <img
              src="/Profile.PNG"
              alt="Sarawut Wongkan"
              className="h-full w-full object-cover"
            />

          </div>

        </motion.div>


      </div>

    </section>
  );
}

export default Hero;