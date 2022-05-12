import ContactForm from "./home_layout/contact";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 1 / 3 }}
    viewport={{ once: true }}
  >
    <div className={`m-6  overflow-hidden relative flex justify-center align-middle`}>
      <ContactForm></ContactForm>
    </div>
    </motion.div>
  );
};

export default Contact;
