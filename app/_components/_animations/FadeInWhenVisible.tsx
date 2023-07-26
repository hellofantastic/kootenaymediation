import { Children, cloneElement } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
}
const parentVariants = {
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      ease: "easeInOut",
      type: "tween",
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    y: 30,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childAnimationVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FadeInWhenVisible = ({ children }: FadeInProps) => {
  const arrayChildren = Children.toArray(children);
  console.log("Children", children);
  return (
    <motion.div variants={parentVariants} key="parent" initial="hidden" whileInView="visible">
      {Children.map(arrayChildren, (child, index) => {
        return (
          <motion.div key={index} variants={childAnimationVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
