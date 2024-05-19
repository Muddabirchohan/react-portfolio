import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import "./styles.css"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};



export const Navigation = () => (
  <motion.ul variants={variants} className="body">
    {itemIds.map((item,index) => (
      <MenuItem
      item={item} key={item} index={index} />
    ))}
  </motion.ul>
);

const itemIds = ["Home","Tech Stack","Projects","contact"];
