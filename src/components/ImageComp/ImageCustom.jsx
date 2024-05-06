import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,10) 30px, rgba(0,0,0,10) 30px)`;
const visibleMask = `linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,10) 0px, rgba(0,0,0,10) 30px)`;

// const visibleMask = `linear-gradient(circle, black 80%, rgba(0, 0, 0, 0.5) 80%)`

export default function ImageCustom({ src,onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  return (
    <section>
      <motion.div
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img src={`${src}`} alt="" onLoad={() => setIsLoaded(true)} 
        onClick={onClick} />
      </motion.div>
    </section>
  );
}


