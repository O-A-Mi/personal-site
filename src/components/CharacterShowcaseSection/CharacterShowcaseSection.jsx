import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './CharacterShowcaseSection.module.css';

const characterImages = [
  "/Sarah D.png",
  "/Uta d_Arbeny.png",
  "/Lylian Pereira.png",
];

const CharacterRow = ({ char, imgSrc }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <motion.div 
      ref={ref} 
      className={styles.row}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`${styles.textCard} liquid-glass`}>
        <h3>{char.title}</h3>
        <p>{char.desc}</p>
      </div>
      <div className={styles.imageWrapper}>
        <motion.img 
          src={imgSrc} 
          alt={char.title} 
          className={styles.characterImage} 
          style={{ y: imgY }}
        />
      </div>
    </motion.div>
  );
};

const CharacterShowcaseSection = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.showcaseContainer}>
      {t.characters.map((char, index) => (
        <CharacterRow key={index} char={char} imgSrc={characterImages[index]} />
      ))}
    </section>
  );
};

export default CharacterShowcaseSection;
