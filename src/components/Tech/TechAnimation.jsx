import "./styles.scss";
import { motion, Variants } from "framer-motion";


const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ title , emoji, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      
        <div className="splashTitle" >
        {title}
        </div>

        <div className="" >
        <motion.div className="card" variants={cardVariants}>
        {/* {emoji} */}
        <img src={emoji} style={{width: 200}}/>
      </motion.div>
        </div>

        <div className="splashContent" style={{background}}>
          <p>
        Hands On experience with React over 4+ years with major development from scratch        
        Hands On experience with React over 4+ years with major development from scratch
        Hands On experience with React over 4+ years with major development from scratch
        Hands On experience with React over 4+ years with major development from scratch
        Hands On experience with React over 4+ years with major development from scratch
        Hands On experience with React over 4+ years with major development from scratch

        </p>
        </div>


    
    </motion.div>
  );
}

const technology =  [
  ["React", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/512px-React_Logo_SVG.svg.png", 170, 220],
  ["Angular", "data:image/png;base64,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", 340, 10],
  ["HTML","data:image/png;base64,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", 20, 40],
  // ["🍐", 80, 120],
  // ["🍏", 100, 140],
  // ["🫐", 205, 245],
  // ["🍆", 260, 290],
  // ["🍇", 290, 320]
];

export default function TechAnimation() {
  return technology.map(([title, emoji, hueA, hueB]) => (
    <Card title={title} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}
