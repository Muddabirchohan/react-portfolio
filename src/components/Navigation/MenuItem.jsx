import * as React from "react";
import { motion } from "framer-motion";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { FaCode } from "@react-icons/all-files/fa/FaCode";
import { FaFolderOpen } from "@react-icons/all-files/fa/FaFolderOpen";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ item, index }) => {


    const toggle = (id) => {


        console.log("id", id)
        const element = document.getElementById(id);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }

    }

    const style = {
        border: `2px solid ${colors[index]}`,

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div
                className="icon-placeholder"
                style={style}
            >

                {item == "Tech Stack" ?

                    <FaCode size={22} color={colors[index]} />
                    :
                    item == "Projects"
                        ?

                        <FaFolderOpen size={22} color={colors[index]} /> :

                        <FaHome size={22} color={colors[index]} />
                }

            </div>
            <div className="text-placeholder" style={style} onClick={() => toggle(
                item == "Tech Stack" ?

                    "story" :
                    item == "Projects" ?

                        "projects" :
                        null

            )}> {item} </div>
        </motion.li>
    );
};
