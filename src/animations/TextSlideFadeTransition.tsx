import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface TextSlideFadeTransitionProps {
  children: ReactNode;
}

const TextSlideFadeTransition: React.FC<TextSlideFadeTransitionProps> = ({
  children,
}) => {
  return (
    <motion.div
      className="relative"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default TextSlideFadeTransition;
