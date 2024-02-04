import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="bg-primary/30 h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full text-x-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="heddin"
            className="h2 text-center mb-12"
          >
            {"let's"}
            <span className="text-accent">connect</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="heddin"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex">
              {/* input group */}
              <input type="text" className="input" placeholder="name" />
              <input type="text" className="input" placeholder="email" />
            </div>
            <input type="text" className="input" placeholder="email" />
            <textarea placeholder="messega" className="textarea"></textarea>
            <button className="btn rounded-full  bg-white/10 max-w-[170px]  py-8 transition-all duration-300 flex  items-center justify-center overflow-hidden hover:border-accent group:">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {"  let`s talk"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex   group-hover:-translate-y-0 group:hover-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
