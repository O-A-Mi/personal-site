import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const ref = useRef(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className={styles.heroContainer}>
      <motion.div 
        className={styles.background} 
        style={{ y: backgroundY }}
      />
      
      <motion.div 
        className={styles.content}
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t.hero.greeting} <br />
          <span className={styles.highlight}>{t.hero.name}</span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default HeroSection;
