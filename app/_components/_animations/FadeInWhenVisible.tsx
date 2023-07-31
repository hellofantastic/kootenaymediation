import { Children, RefObject, ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  scrollRef?: RefObject<HTMLElement>;
}
const parentVariants = {
  visible: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.8,

      staggerChildren: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FadeInWhenVisible = ({ children, scrollRef }: FadeInProps) => {
  const arrayChildren = Children.toArray(children);

  return (
    <motion.div variants={parentVariants} key="parent" initial="hidden" whileInView="visible" viewport={{ once: true, amount: "some" }}>
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
