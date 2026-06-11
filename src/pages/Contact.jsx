import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const faqs = [
  {
    q: "Who can apply for the internship?",
    a: "Students from Computer Science, IT, or related fields can apply for the Synent internship program."
  },
  {
    q: "Is the internship remote or onsite?",
    a: "Most internships are conducted remotely allowing students from different cities to participate."
  },
  {
    q: "Will interns work on real projects?",
    a: "Yes. Interns get practical experience by working on real development projects."
  },
  {
    q: "Do interns receive a certificate?",
    a: "Yes, interns who successfully complete the internship will receive an official certificate."
  },
  {
    q: "How long is the internship duration?",
    a: "The internship duration usually ranges from 4 to 8 weeks depending on the role."
  }
];

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // FORM STATE
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Project Consultation",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all required fields.");
      return;
    }

    // fake success (frontend only)
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      type: "Project Consultation",
      message: ""
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="bg-[#0f172a] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative pt-40 pb-20 text-center">

        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="container-custom relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Let’s Build Something
            <span className="text-blue-500"> Extraordinary</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
            Whether you're a startup or student, our team is ready to collaborate.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO */}
      <section className="pb-24">
        <div className="container-custom grid md:grid-cols-3 gap-8">

          {/* EMAIL CARD (CLICKABLE FIX) */}
          <a
            href="mailto:synenttech@gmail.com?subject=Inquiry from Website"
            className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center hover:border-blue-500/40 transition block"
          >
            <FaEnvelope className="text-blue-400 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400">synenttech@gmail.com</p>
            <p className="text-gray-500 text-sm mt-2">Click to open Gmail</p>
          </a>

          <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <FaMapMarkerAlt className="text-purple-400 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office Location</h3>
            <p className="text-gray-400">HITEC City, Hyderabad</p>
          </motion.div>

          <motion.div whileHover={{ y: -8 }} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
            <FaClock className="text-green-400 text-3xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Operational Hours</h3>
            <p className="text-gray-400">Mon - Fri: 10 AM - 6 PM</p>
          </motion.div>

        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="pb-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16">

          {/* FORM */}
          <motion.form
  onSubmit={handleSubmit}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl"
>
  <h2 className="text-3xl font-bold mb-8">
    Send a Message
  </h2>

  {/* NAME */}
  <motion.input
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Your Name"
    whileFocus={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-blue-500 transition"
  />

  {/* EMAIL */}
  <motion.input
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email Address"
    whileFocus={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-blue-500 transition"
  />

  {/* SELECT */}
  <motion.select
    name="type"
    value={form.type}
    onChange={handleChange}
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-blue-500 transition"
  >
    <option>Project Consultation</option>
    <option>Internship Query</option>
    <option>Collaboration</option>
  </motion.select>

  {/* MESSAGE */}
  <motion.textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Tell us how we can help..."
    rows="5"
    whileFocus={{ scale: 1.02 }}
    className="w-full p-4 mb-6 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-blue-500 transition"
  />

  {/* BUTTON */}
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold transition"
  >
    Send Message
  </motion.button>

  {/* SUCCESS */}
  {success && (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-green-400 mt-4 text-center"
    >
      ✅ Message sent successfully!
    </motion.p>
  )}
</motion.form>

          {/* SIDE TEXT */}
          <motion.div
  initial={{ opacity: 0, scale: 0.95, y: 30 }}
  whileInView={{ opacity: 1, scale: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut"
  }}
  whileHover={{ y: -6 }}
  className="flex flex-col justify-center"
>
  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
    Quick Response Team
  </h2>

  <p className="text-gray-400 leading-8">
    We typically respond within 24–48 hours.
  </p>
</motion.div>

        </div>
      </section>

      {/* FAQ */}
      <section className="pb-28">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">
            Internship FAQ
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <h3 className="font-semibold text-lg">
                  {item.q}
                </h3>

                {openIndex === index && (
                  <p className="text-gray-400 mt-3">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
