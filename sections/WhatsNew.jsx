"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10  `}>
    <motion.div
      variant={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-center`}
    >
      
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New?" />
        <TitleText title={<> What's new 'bout Metaverse?</>} />
        <motion.div
        variants={planetVariants("right")}
        className={`flex ${styles.flexCenter}`}
      >
        <img
          src="./whats-new.png"
          alt="get start"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      {/*  <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div> */}
        <div className = 'mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {newFeatures.map((feature)=>(
            <NewFeatures
            key={feature.title}
            {...feature}
            />
          ))}

        </div>
      </motion.div>
     
    </motion.div>{" "}
  </section>
);

export default WhatsNew;
