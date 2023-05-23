import { motion } from "framer-motion";

const animations = {
  initial: { opactity: 0, x: 100 },
  animate: { opactity: 1, x: 0 },
  exit: { opactity: 0, x: -100 },
};
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
