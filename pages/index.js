import Image from "next/image";

// components
import PrarticCotainer from "../components/ParticlesContainer";
import ProjecTsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { easeInOut, motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60  h-full">
      {/* text  */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
          {/* title  */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            {" Hi! I'am"} <br /> Abdulhaq Nadirov {""}
            <br />
            <span className="text-accent"> Frontend Developer</span>
          </motion.h1>
          {/* subtitle  */}
          {/* <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            labore, deleniti aperiam nisi quisquam recusandae unde temporibus,
            illo voluptatibus,
          </motion.p> */}
          {/* btn */}
          <div className="flex justify-center xl:hidden relative ">
            <ProjecTsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjecTsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img  */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* porticles */}
        <PrarticCotainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: easeInOut }}
          className="w-full h-full max-w-[537px] max-h-[633px] absolute -bottom-2 lg:bottom-0 lg:right-[6%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
