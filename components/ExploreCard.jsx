'use client';
import {useState} from 'react';
import { motion, MotionConfigContext } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const ExploreCard = () => (
  <section className={`${styles.paddings}`} id="ExploreCard">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport ={{once:false, amount:0.25}}
      className= {`${styles.innerWidth} mx-auto flex flex-col`}>
        <TypingText title ="| The World" textStyles='text-center'/>

    </motion.div>
  </section>
);

export default ExploreCard;
