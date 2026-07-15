import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 md:px-20">
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-2">
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
            Sarawut
            <br />
            <span className="text-green-600">Wongkan</span>
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
              I am a fourth-year Computer Engineering student at Kasetsart
              University, Chalermphrakiat Sakon Nakhon Province Campus.
            </p>

            <p className="mt-4">
              I enjoy designing and developing software applications from
              frontend interfaces to backend services and IoT integration.
            </p>
          </motion.div>

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
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-green-500 hover:text-green-500"
            >
              GitHub
            </a>

          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center"
        >
          <div className="h-72 w-72 overflow-hidden rounded-full border-4 border-green-600 md:h-96 md:w-96">
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
