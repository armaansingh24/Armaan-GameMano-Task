import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface FadeInTransitionProps {
  children: ReactNode;
}

const FadeInTransition: React.FC<FadeInTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, delay: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInTransition;
