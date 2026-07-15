import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


const contacts = [
  {
    title: "Email",
    detail: "wongkan.sarawut@gmail.com",
    link: "mailto:your-email@gmail.com",
    icon: FaEnvelope,
  },

  {
    title: "GitHub",
    detail: "github.com/yourusername",
    link: "https://github.com/",
    icon: FaGithub,
  },

  {
    title: "LinkedIn",
    detail: "linkedin.com/in/yourprofile",
    link: "#",
    icon: FaLinkedin,
  },
];


function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20">

      <div className="mx-auto max-w-7xl">


        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          Contact
        </motion.h2>



        <p className="mt-4 max-w-2xl text-zinc-400">
          Feel free to contact me for collaboration,
          software development projects, or opportunities.
        </p>



        <div className="mt-10 grid gap-6 md:grid-cols-3">


          {contacts.map((contact, index) => {

            const Icon = contact.icon;


            return (

              <motion.a
                key={contact.title}
                href={contact.link}
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:-translate-y-2 hover:border-green-500"
              >

                <Icon className="text-3xl text-green-500" />


                <h3 className="mt-5 text-xl font-semibold">
                  {contact.title}
                </h3>


                <p className="mt-2 text-sm text-zinc-400">
                  {contact.detail}
                </p>


              </motion.a>

            );

          })}


        </div>


      </div>

    </section>
  );
}

export default Contact;