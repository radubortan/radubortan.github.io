import { useState } from "react";
import Links from "./links/Links";
import classes from "./sidebar.module.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
import * as variants from "./sidebar.variants";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className={classes.sidebar} animate={open ? "open" : "closed"}>
      <motion.div
        className={classes.background}
        variants={variants.sidebarVariants}
      >
        <Links />
      </motion.div>
      <ToggleButton
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
    </motion.div>
  );
};

export default Sidebar;
