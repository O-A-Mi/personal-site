import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { t } = useLanguage();

  return (
    t.about.map((about, index) => (
      <section ref={ref} className={styles.aboutContainer}>
        <motion.div
          className={`${styles.glassBox} liquid-glass`}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        >
          <div key={index}>
            <h2>{about.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: about.text }} />
          </div>
        </motion.div>
      </section>
    ))
  );
};

export default AboutSection;
