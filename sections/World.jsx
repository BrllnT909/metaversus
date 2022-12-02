'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import {staggerContainer, fadeIn} from '../utils/motion';
import {TitleText, TypingText} from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>


    </motion.div>
    World section
  </section>
);

export default World;
