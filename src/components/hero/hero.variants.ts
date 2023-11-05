export const wrapperVariants = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 9,
      duration: 1,
    },
  },
};

export const buttonVariants = {
  whileHover: {
    backgroundColor: "#ffa500",
    color: "black",
    borderColor: "#ffa500",
    transition: { duration: 0.3, borderColor: { duration: 0.1 } },
  },
};

export const scrollVariant = {
  initial: { opacity: 1, y: 0 },
  animate: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};
